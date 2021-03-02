const thumbWar = require('../thumb-war')
const utilsMock = require('../utils')

jest.mock('../utils', () => {
    return {
        getWinner: jest.fn((p1, p2) => p1)
    };
})

test('should return winner', () => {
    const winner = thumbWar('k', 'p');
    expect(winner).toBe('k');
    expect(utilsMock.getWinner.mock.calls).toEqual([
        ['k','p'],
        ['k','p'],
    ])
    utilsMock.getWinner.mockReset()
})
