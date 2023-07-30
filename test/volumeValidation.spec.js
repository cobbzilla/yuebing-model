import { describe, it } from "mocha";
import { expect, assert } from "chai";
import { SourceTypeDef } from "../lib/esm/index.js";
import { MobilettoOrmValidationError } from "mobiletto-orm-typedef";

describe("test source volume validation", () => {
    it("returns correct validation errors for an empty object", async () => {
        try {
            const result = await SourceTypeDef.validate({});
            assert.fail(`expected validation to fail with ValidationError, but received: ${result}`);
        } catch (e) {
            expect(e).instanceof(MobilettoOrmValidationError);
            expect(Object.keys(e.errors).length).eq(2, "expected 2 validation errors");
            expect(e.errors.name).is.not.undefined;
            expect(e.errors.name.length).eq(1);
            expect(e.errors.name[0]).eq("required");
            expect(e.errors.type).is.not.undefined;
            expect(e.errors.type.length).eq(1);
            expect(e.errors.type[0]).eq("required");
        }
    });
    it("returns correct validation errors for a partial object", async () => {
        try {
            const result = await SourceTypeDef.validate({
                name: "foo",
                type: "local",
                local: {},
            });
            assert.fail(`expected validation to fail with ValidationError, but received: ${result}`);
        } catch (e) {
            expect(e).instanceof(MobilettoOrmValidationError);
            expect(Object.keys(e.errors).length).eq(1, "expected 1 validation error");
            expect(e.errors["local_key"]).is.not.undefined;
            expect(e.errors["local_key"].length).eq(1);
            expect(e.errors["local_key"][0]).eq("required");
        }
    });
});
