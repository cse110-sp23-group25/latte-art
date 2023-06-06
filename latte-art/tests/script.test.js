test("Sanity check", () => {
    expect(true).toBe(true);
});


const { seedGeneration, fortuneSelector } = require("../js/script");


describe("seedGeneration", () => {
    test("Seed generation returns a seed value", () => {
        expect(typeof seedGeneration(Math.floor(Math.random() * 100))).toBe("number");
    });
    
});

describe("fortuneSelector", () => {
    test("Seed generation returns a string fortune", () => {
        expect(typeof fortuneSelector(Math.floor(Math.random() * 100))).toBe("string");
    });
    
});





