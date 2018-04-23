// Core
import { sum, getUniqueID, getFullApiUrl } from "./";

const GROUP_ID = "test";
const api = `https://lab.lectrum.io/api/feed`;

describe("helpers:", () => {
    test("sum function should be a function", () => {
        expect(sum).toBeInstanceOf(Function);
    });

    test("sum function should throw, when being called with non-number type as first argument", () => {
        expect(() => sum("привет", 2)).toThrow();
    });

    test("sum function should throw, when being caleed with non-number type as second argument", () => {
        expect(() => sum(2, "привет")).toThrow();
    });

    test("sum function should return an addition of two arguments passed", () => {
        expect(sum(2, 3)).toBe(5);
        expect(sum(1, 8)).toBe(9);
    });

    test("getUniqueID function should be a function", () => {
        expect(getUniqueID).toBeInstanceOf(Function);
    });

    test("getUniqueID function should throw, when called with non-number argument", () => {
        expect(() => getUniqueID("привет")).toThrow();
    });

    test("getUniqueID should return a string of desired given length", () => {
        expect(typeof getUniqueID()).toBe("string");
        expect(getUniqueID(5)).toHaveLength(5);
        expect(getUniqueID(13)).toHaveLength(13);
    });

    test("getFullApiUrl function should be a function", () => {
        expect(getFullApiUrl).toBeInstanceOf(Function);
    });

    test("getFullApiUrl function should throw, when called with a non-string argument", () => {
        expect(() => getFullApiUrl(null, 1)).toThrowError(
            "'api' and 'GROUP_ID' arguments passed should be a string!"
        );
        expect(() => getFullApiUrl(1, null)).toThrowError(
            "'api' and 'GROUP_ID' arguments passed should be a string!"
        );
    });

    test("getFullApiUrl function should return a vliad full api url", () => {
        expect(getFullApiUrl(api, GROUP_ID)).toBe(`${api}/${GROUP_ID}`);
    });
});
