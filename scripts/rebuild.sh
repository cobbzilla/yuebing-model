#!/bin/sh

SCRIPT_DIR="$(cd "$(dirname "${0}")" && pwd)"
BASE_DIR="$(cd "${SCRIPT_DIR}"/.. && pwd)"
if [ -z "${BASE_DIR}" ] ; then
    echo >&2 "no basedir"
    exit 2
fi

clean () {
    find "${BASE_DIR}"/lib/esm -type f | grep -v package.json | xargs rm
    rm -rf "${BASE_DIR}"/src/type/*
}

generate () {
    INDEX_TS="${BASE_DIR}"/src/index.ts
    INDEX_BAK=$(mktemp "${BASE_DIR}"/src/index.ts.XXXXXX) || exit 3
    cd "${BASE_DIR}" && \
    cat "${INDEX_TS}" > "${INDEX_BAK}" && \
    cp "${BASE_DIR}"/src/index.ts.src "${INDEX_TS}" && \
    pnpm tsc && \
    pnpm orm-gen && \
    mv "${INDEX_BAK}" "${INDEX_TS}" && \
    pnpm tsc
}

clean
generate
