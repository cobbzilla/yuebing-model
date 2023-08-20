#!/bin/sh

SCRIPT_DIR="$(cd "$(dirname "${0}")" && pwd)"
BASE_DIR="$(cd "${SCRIPT_DIR}"/.. && pwd)"
if [ -z "${BASE_DIR}" ] ; then
    echo >&2 "no basedir"
    exit 2
fi
TOOLS_DIR="${BASE_DIR}"/src/tools
TOOLS_FILE_COUNT="$(find ${TOOLS_DIR} -type f | wc -l)"
if [ -z "${TOOLS_FILE_COUNT}" ] ; then
    echo >&2 "no tools found in ${TOOLS_DIR}, please fix repo"
    exit 3
fi
# shellcheck disable=SC2086
if [ ${TOOLS_FILE_COUNT} -eq 0 ] ; then
    echo >&2 "no tools found in ${TOOLS_DIR}, please fix repo"
    exit 3
fi

clean () {
    find "${BASE_DIR}"/lib/esm -type f | grep -v package.json | xargs rm
    rm -rf "${BASE_DIR}"/src/type/*
}

generate () {
    INDEX_TS="${BASE_DIR}"/src/index.ts
    INDEX_BAK=$(mktemp "${BASE_DIR}"/src/index.ts.XXXXXX) || exit 3
    TOOLS_BAK=$(mktemp -d "${BASE_DIR}"/tools.tmp.XXXXXX) || exit 3
    SUCCESS=0
    cd "${BASE_DIR}" && \
    cat "${INDEX_TS}" > "${INDEX_BAK}" && \
    cp "${BASE_DIR}"/src/index.ts.src "${INDEX_TS}" && \
    mv "${TOOLS_DIR}"/* "${TOOLS_BAK}"/ && \
    pnpm tsc && \
    pnpm orm-gen && \
    mv "${INDEX_BAK}" "${INDEX_TS}" && \
    mv "${TOOLS_BAK}"/* "${TOOLS_DIR}"/ && \
    rmdir "${TOOLS_BAK}" && \
    pnpm tsc && \
    SUCCESS=1 || \
    echo >&2 "error generating"
    if [ ${SUCCESS} -eq 0 ] ; then
        echo >&2 "rolling back: ${INDEX_BAK} -> ${INDEX_TS}" && \
        mv "${INDEX_BAK}" "${INDEX_TS}" && \
        echo >&2 "rolling back: ${TOOLS_BAK} -> ${TOOLS_DIR}" && \
        mv "${TOOLS_BAK}"/* "${TOOLS_DIR}"/ && \
        rmdir "${TOOLS_BAK}"
        echo >&2 "successful rollback"
    fi
}

clean
generate
