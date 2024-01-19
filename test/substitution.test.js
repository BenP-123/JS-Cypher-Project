const expect = require("chai").expect;
const substitutionModule = require("../src/substitution");
const substitution = substitutionModule.substitution;


describe("substitution", () => {
    it("should return false if the provided alphabet does not have exactly 26 characters", () => {
        const actual = substitution("test", "abcdefghijklmnopqrstuvwxy");
        const expected = false;
        expect(actual).to.equal(expected);
    });
    it("should return false if there is no alphabet provided", () => {
        const actual = substitution("test");
        const expected = false;
        expect(actual).to.equal(expected);
    });
    it("should return false if the provided alphabet has duplicate characters", () => {
        const actual = substitution("test", "abcdefghijklmnopqrstuvwxya");
        const expected = false;
        expect(actual).to.equal(expected);
    });
    it("should encode a message with substitution", () => {
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        const expected = "jrufscpw";
        expect(actual).to.equal(expected);
    });
    it("should maintain the same spacing as the input", () => {
        const actual = substitution("this is a test", "poiuytrewqasdfghjklmnbvcxz");
        const expected = "mewl wl p mylm";
        expect(actual).to.equal(expected);
    });
    it("should function properly with all types of characters", () => {
        const actual = substitution("this is a test", "!oi4y@r{wqa*dfg)&^l7nb|c?z");
        const expected = "7{wl wl ! 7yl7";
        expect(actual).to.equal(expected);
    });
    it("should decode a message properly", () => {
        const actual = substitution("7{wlwl!7yl7", "!oi4y@r{wqa*dfg)&^l7nb|c?z", false);
        const expected = "thisisatest";
        expect(actual).to.equal(expected);
    });
    it("should maintain the same spacing as the input while decoding", () => {
        const actual = substitution("mewl wl p mylm", "poiuytrewqasdfghjklmnbvcxz", false);
        const expected = "this is a test";
        expect(actual).to.equal(expected);
    });
    it("should function properly with all types of characters when decoding", () => {
        const actual = substitution("7{wl wl ! 7yl7", "!oi4y@r{wqa*dfg)&^l7nb|c?z", false);
        const expected = "this is a test";
        expect(actual).to.equal(expected);
    });
});
 