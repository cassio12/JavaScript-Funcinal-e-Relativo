function exec(fn, a, b) {fn(a, b)}

const somarNoTerminal = (x, y) => console.log(x + y);
const subtraioNoTerminal = (w, z) => console.log(w - z);
const subtrair = (x, y) => x - y;

exec(somarNoTerminal, 56, 38)
exec(subtraioNoTerminal, 182, 27)

const res = subtrair(50, 25)
console.log(res)