function sum(a, b) {
    return a + b;
}

test("adds 2 + 2 to equal 4", () => {
    expect(sum(1, 1)).toBe(2);
});