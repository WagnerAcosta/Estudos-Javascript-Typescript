function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Esperando instância de Date.");
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

try {
  const hora = retornaHora();
  console.log('horas: ' + hora);
} catch (error) {
  console.log('error:', error.message);
} finally {
  console.log("finally: sempre vou ser executado!");
}
