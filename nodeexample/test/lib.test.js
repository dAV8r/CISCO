const {expect} = require('chai'); // https://www.chaijs.com/
const {forEach, map, filter} = require('../src/lib');

// test suite
describe("testing lib module", () => {
    // test spec
    it("testing foreach", () => {
        let data = [3, 6, 2, 12];
        let action = jest.fn(); // mock function
        forEach(data, action);
        expect(action.mock.calls.length).to.equal(4);
        expect(action.mock.calls[0][0]).to.equal(3);
        expect(action.mock.calls[1][0]).to.equal(6);
    })

    // test spec 
    it("testing filter", () => {
        let data = [3, 6, 2, 12, 5];
        let predicate = jest.fn(e => e % 2 === 0); // mock
        let result = filter(data, predicate);
        expect(result.length).to.equal(3);
        expect(result[0]).to.equal(6);
        expect(result[1]).to.equal(2);
    })

    it("testing map", () => {

    })
});