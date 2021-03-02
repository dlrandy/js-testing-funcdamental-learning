const thumbWar = require('../thumb-war')
const utilsMock = require('../utils')

jest.mock('../utils')

test('returns winner', () => {
  const winner = thumbWar('k', 'p')
  expect(winner).toBe('k')
  expect(utilsMock.getWinner.mock.calls).toEqual([
    ['k', 'p'],
    ['k', 'p']
  ])

  // cleanup
  utilsMock.getWinner.mockReset()
})
