function jurosSimples(capitalInicial, taxa, tempo) {
  const juros = taxa / 100;
  return (capitalInicial + capitalInicial * juros * tempo).toFixed(2);
}

function jurosCompostos(capitalInicial, taxa, tempo) {
  const juros = taxa / 100;
  return (capitalInicial * (1 + juros) ** tempo).toFixed(2);
}

console.log(jurosSimples(2490, 2.5, 8));
console.log(jurosCompostos(2490, 2.5, 8));
