function Palindromo(palavra: string) {
  let inverte: string = "";
  inverte = palavra.split("").reverse().join("");

  palavra === inverte
    ? console.log("É um PALÍNDROMO")
    : console.log("Não sou PALÍNDROMO");
}

Palindromo("343");
