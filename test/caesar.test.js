const expect = require("chai").expect;
const caesarModule = require("../src/caesar");
const caesar = caesarModule.caesar;

describe("caesar", () => {
    it("should return false if the shift value is 0", () => {
        const expected = false;
        const actual = caesar("test", 0);
        expect(actual).to.equal(expected);
    });
    it("should return false if the shift value is greater than 25", () => {
        const expected = false;
        const actual = caesar("test", 26);
        expect(actual).to.equal(expected);
    });
    it("should return false if the shift value is less than -25", () => {
        const expected = false;
        const actual = caesar("test", -26);
        expect(actual).to.equal(expected);
    });
    it("should encode a message", () => {
        const expected = "cdf";
        const actual = caesar("abd", 2);
        expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
        const expected = "bcd";
        const actual = caesar("ABc", 1);
        expect(actual).to.equal(expected);
    });
    it("should ignore non-letter characters", () => {
        const expected = "&bcd(";
        const actual = caesar("&abc(", 1);
        expect(actual).to.equal(expected);
    });
    it("should cycle back to the beginning of alphabet when shifting past z", () => {
        const expected = "abc";
        const actual = caesar("wxy", 4);
        expect(actual).to.equal(expected);
    });
    it("should shift to the left when the shift value is negative", () => {
        const expected = "abc";
        const actual = caesar("cde", -2);
        expect(actual).to.equal(expected);
    });
    it("should apply the cypher properly to long strings of random characters", () => {
        const expected = "m$4rx  pdd@*%jqpxl*%4854_ojodn%*(&#$j_";
        const actual = caesar("J$4oU  mAA@*%gnmui*%4854_lglak%*(&#$g_", -23);
        expect(actual).to.equal(expected);
    });
    it("should decode messages following the same rules as encoding", () => {
        const expected = "j$4ou  maa@*%gnmui*%4854_lglak%*(&#$g_";
        const actual = caesar("m$4rx  pdd@*%jqpxl*%4854_ojodn%*(&#$j_", -23, false);
        expect(actual).to.equal(expected);
    });
});
