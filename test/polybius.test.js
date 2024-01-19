const expect = require("chai").expect;
const polybiusModule = require("../src/polybius");
const polybius = polybiusModule.polybius;

describe("polybius", () => {
    it("should encode a message", () => {
        const expected = "4432423442341144513444";
        const actual = polybius("thisisatest");
        expect(actual).to.equal(expected);
    });
    it("should maintain the same spacing as the input", () => {
        const expected = "44324234 4234 11 44513444";
        const actual = polybius("this is a test");
        expect(actual).to.equal(expected);
    });
    it("should treat 'i' and 'j' as the same", () => {
        const expected = "1121314242424252";
        const actual = polybius("abcijijk");
        expect(actual).to.equal(expected);
    });
    
    it("should return false if given an odd amount of numbers when decoding", () => {
        const expected = false;
        const actual = polybius("5142351245142453214", false);
        expect(actual).to.equal(expected);
    });
    it("should decode numbers into letters", () => {
        const expected = "test";
        const actual = polybius("44513444", false);
        expect(actual).to.equal(expected);
    });
    it("should maintain the same spacing as the input while decoding", () => {
        const expected = "a b c def";
        const actual = polybius("11 21 31 415112", false);
        expect(actual).to.equal(expected);
    });
    it("should output 'i/j' for i or j when decoding", () => {
        const expected = "abci/ji/ji/ji/jk";
        const actual = polybius("1121314242424252", false);
        expect(actual).to.equal(expected);
    });
});
 