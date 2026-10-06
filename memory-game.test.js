const test = require('node:test');
const assert = require('node:assert/strict');
const { createLevel, getLevelConfig } = require('./memory-game.js');

test('o jogo possui exatamente 1 nível', () => {
    assert.equal(getLevelConfig(1).level, 1);
    assert.equal(getLevelConfig(20).level, 1);
});

test('o nível único possui 20 cartões em 10 pares', () => {
    const config = getLevelConfig(1);
    const cards = createLevel(1);
    assert.equal(cards.length, 20);
    assert.equal(config.pairs, 10);
    assert.equal(cards.length, config.pairs * 2);
    assert.equal(new Set(cards.map((card) => card.symbol)).size, config.pairs);
});

test('o conteúdo do deck não apresenta padrão repetido de posições', () => {
    const cards = createLevel(1);
    const positions = cards.map((card) => card.position);
    assert.equal(new Set(positions).size, cards.length);
    assert.equal(new Set(cards.map((card) => card.pairId)).size, 10);
});
