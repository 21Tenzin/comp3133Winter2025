const { expect } = require('chai');
const calculator = require('../app/calculator');

describe('Calculator Tests', () => {

    // Addition Tests
    describe('Addition Tests', () => {
        it('add(5, 2) should return 7', () => {
            expect(calculator.add(5, 2)).to.equal(7);
        });

        it('add(5, 2) should NOT return 8', () => {
            expect(calculator.add(5, 2)).to.not.equal(8);
        });
    });

    // Subtraction Tests
    describe('Subtraction Tests', () => {
        it('sub(5, 2) should return 3', () => {
            expect(calculator.sub(5, 2)).to.equal(3);
        });

        it('sub(5, 2) should NOT return 5', () => {
            expect(calculator.sub(5, 2)).to.not.equal(5);
        });
    });

    // Multiplication Tests
    describe('Multiplication Tests', () => {
        it('mul(5, 2) should return 10', () => {
            expect(calculator.mul(5, 2)).to.equal(10);
        });

        it('mul(5, 2) should NOT return 12', () => {
            expect(calculator.mul(5, 2)).to.not.equal(12);
        });
    });

    // Division Tests
    describe('Division Tests', () => {
        it('div(10, 2) should return 5', () => {
            expect(calculator.div(10, 2)).to.equal(5);
        });

        it('div(10, 2) should NOT return 2', () => {
            expect(calculator.div(10, 2)).to.not.equal(2);
        });

        it('div(10, 0) should return "Error: Division by zero"', () => {
            expect(calculator.div(10, 0)).to.equal('Error: Division by zero');
        });
    });
});
