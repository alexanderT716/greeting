var utils  = require('course-utilities');
var sortArray = utils.load('./sort.js', 'sortArray');



let inputs = [
    [4, 3, 2, 5, 6],
    [1, 2, 3, 4, 5],
    [15, 2, 3, 1],
    [],
    [21, 41, 6, 9, 4, 13]
];

let outputs = [
    [2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4],
    [],
    [4, 6, 9, 13, 21, 41]
];

describe('testing sort():', () => {
    for (let i = 0; i < inputs.length; i++) {

        it('should sort from least to greatest', () => {
            expect(sortArray(inputs[0])).toStrictEqual(outputs[0]);
        })
        it('should sort from least to greatest', () => {
            expect(sortArray(inputs[1])).toStrictEqual(outputs[1]);
        })
}
});