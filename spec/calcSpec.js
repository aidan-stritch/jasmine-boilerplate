describe("Calculator", function(){
    describe("Addition tests", function() {
        it("should return 42", function() {
            expect(addition(20,22)).toBe(42);
        });
        it("should return 26", function() {
            expect(addition(7,19)).toBe(26);
        });
        it("should supply an error if we don't supply two numbers", function() {
            expect(addition("Hitchikers","Guide")).toBe("Error!");
        });
    });
});