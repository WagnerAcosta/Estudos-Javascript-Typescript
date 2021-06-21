const sequencia = {
  _valor: 1,

  get valor() {
    return this._valor++;
  },

  set valor(v) {
    if (v > this._valor) this._valor = v;
  },
};

console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 30;
console.log(sequencia.valor, sequencia.valor);
