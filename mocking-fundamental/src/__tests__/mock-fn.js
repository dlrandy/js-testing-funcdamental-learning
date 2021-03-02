const thumbWar = require('../thumb-war');
const utils = require('../utils')

test('should return winner', () => {
    const originalGetWinner = utils.getWinner
    utils.getWinner = jest.fn((p1, p2) => p1);

    const winner = thumbWar('k', 'p');
    expect(winner).toBe('k');
    expect(utils.getWinner.mock.calls).toEqual(
        [
            ['k', 'p'],
            ['k', 'p'],
        ]
    );
    expect(utils.getWinner).toHaveBeenCalledTimes(2);
    expect(utils.getWinner).toHaveBeenNthCalledWith(1, 'k', 'p')
    expect(utils.getWinner).toHaveBeenNthCalledWith(2, 'k', 'p')

    // cleanup
    utils.getWinner = originalGetWinner
})
