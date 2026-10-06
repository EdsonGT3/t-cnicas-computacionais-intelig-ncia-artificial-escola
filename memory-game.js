(function (root, factory) {
    const api = factory();

    if (typeof module !== "undefined" && module.exports) {
        module.exports = api;
    }

    root.MemoryGame = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
    const symbols = ["🍓", "🍋", "🍇", "🍇️", "🍒", "🍉", "🍌", "🥝", "🍍", "🍏", "🍊", "🍒️", "🍉️", "🍌️", "🥥", "🥈", "🍏️", "🍇︎"];

    function getLevelConfig(level) {
        return {
            level: 1,
            pairs: 10
        };
    }

    function shuffle(items) {
        const shuffled = [...items];

        for (let index = shuffled.length - 1; index > 0; index -= 1) {
            const randomIndex = Math.floor(Math.random() * (index + 1));
            [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
        }

        return shuffled;
    }

    function createLevel(level) {
        const config = getLevelConfig(level);
        const selectedSymbols = symbols.slice(0, config.pairs);
        const cards = selectedSymbols.flatMap((symbol) => [
            { symbol, pairId: symbol },
            { symbol, pairId: symbol }
        ]);

        return shuffle(cards).map((card, index) => ({
            ...card,
            id: `${config.level}-${index}`,
            position: index
        }));
    }

    return { createLevel, getLevelConfig };
});
