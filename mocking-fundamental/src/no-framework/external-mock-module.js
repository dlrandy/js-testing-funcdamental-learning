require('../__no-framework-mocks__/utils')

const utilsPath = require.resolve('../utils');
const mockUtilsPath = require.resolve('../__no-framework-mocks__/utils');

require.cache[utilsPath] = require.cache[mockUtilsPath]

const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')


const winner = thumbWar('p', 'k')
assert.strictEqual(winner, 'p')
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ['p', 'k'],
  ['p', 'k']
])

// cleanup
delete require.cache[utilsPath]


