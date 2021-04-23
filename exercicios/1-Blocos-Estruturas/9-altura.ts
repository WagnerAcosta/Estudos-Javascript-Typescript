function AlturaMontanha(distancia: number, angulo: number) {
  let dhor = distancia * Math.cos(angulo);
  return dhor;
}
console.log(AlturaMontanha(300, 60));
