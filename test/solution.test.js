const findLowestScoringStudent = require("../src/solution");

describe(findLowestScoringStudent, () => {
    test("should return the student with the lowest score", () => {
        const students = [
            { name: "Leo Yeon-Joo", score: 8.9 },
            { name: "Morgan Sutton", score: 7.4 },
            { name: "Natalee Vargas", score: 9.2 },
          ];
        const expected = { name: "Morgan Sutton", score: 7.4 };
        const actual = findLowestScoringStudent(students);
        expect(expected).toEqual(actual);
    });
    test("should return 'null' when given an empty list", () => {
        const students = [];
        const expected = null;
        const actual = findLowestScoringStudent(students);
        expect(actual).toBeNull;
    })
});