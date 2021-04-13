import {Rover} from "../main/rover";

describe('Rover Tests', () => {
    let rover: Rover;
    const turnLeftTestData = [{command: 'L', expected: '0:0:W'},
        {command: 'LL', expected: '0:0:S'},
        {command: 'LLL', expected: '0:0:E'},
        {command: 'LLLL', expected: '0:0:N'}]

    const turnRightTestData = [
        {command: 'R', expected: '0:0:E'},
        {command: 'RR', expected: '0:0:S'},
        {command: 'RRR', expected: '0:0:W'},
        {command: 'RRRR', expected: '0:0:N'}]


    beforeEach(() => {
        rover = new Rover();
    })

    it("should face North and location to be 0:0 when in starting position", () => {
        expect(rover.move('')).toBe('0:0:N');
    })

    turnLeftTestData.forEach(({command, expected}) => {
        it(`should have final output ${expected} when turning Left ${command.length} times from starting position`, () => {
            expect(rover.move(command)).toBe(expected);
        })
    })

    turnRightTestData.forEach(({command, expected}) => {
        it(`should have final output ${expected} when turning Right ${command.length} times from starting position`, () => {
            expect(rover.move(command)).toBe(expected);
        })
    })

    it("should have final output '0:1:N' when moving by one from starting position", () => {
        expect(rover.move('M')).toBe('0:1:N')
    })

    it("should have final output '0:2:N' when moving by one from starting position", () => {
        expect(rover.move('MM')).toBe('0:2:N')
    })
})