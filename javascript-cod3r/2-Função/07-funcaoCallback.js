let acumulador = 0;
const oddNumbers = [51, 97, 65, 23];

const forEach = (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    const item = array[index];
    callback(item, index, array);
  }
};

const logMessage = (item, index, array) => {
  const message = `"${item}" é o ${index + 1} item do array [${array.join(
    ", "
  )}]`;
  console.log(message);
};

const sumArrayItems = (item) => (acumulador += item);

forEach(oddNumbers, logMessage);
forEach(oddNumbers, sumArrayItems);
console.log(acumulador);
