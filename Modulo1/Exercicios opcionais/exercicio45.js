/* 45. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
o número de vezes que a string aparece no array. */

function counter(arr) {
    const res = {};
    for (const str of arr) {
        if (str in res) res[str] += 1;
        else res[str] = 1;
    }
    return res;
}

const stringsArray = ["ab", "ab", "abc", "ac", "a", "ac"];
const stringsObject = counter(stringsArray);

console.log(stringsObject);
