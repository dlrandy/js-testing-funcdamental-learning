const thumbWar = require('../thumb-war')
const utils = require('../utils')

test('should return winner', () => {
    jest.spyOn(utils, 'getWinner');
    utils.getWinner.mockImplementation((p1, p2) => p1);

    const winner = thumbWar('k','p')
    expect(winner).toBe('k');
    expect(utils.getWinner.mock.calls).toEqual([
        ['k', 'p'],
        ['k', 'p'],
    ])
   utils.getWinner.mockRestore()

})
