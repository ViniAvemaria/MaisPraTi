/* 3. Palavras Únicas
Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
todas as palavras únicas e exibi-las em um array. */

const isAlpha = (str) => {
    return /^\p{L}+$/u.test(str);
};

const string = "olá olá mundo mundo";
const allWords = new Set();
const result = [];

for (const word of string.split(" ")) {
    if (!allWords.has(word) && isAlpha(word)) {
        result.push(word);
        allWords.add(word);
    }
}

console.log(result);
