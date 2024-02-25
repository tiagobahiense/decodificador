let opcao = "";

  function criptografar(texto) {
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");
    return texto;
  }

  function descriptografar(texto) {
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");
    return texto;
  }

  function escolherOpcao(valor) {
    opcao = valor;
    processar();
  }

  function processar() {
    const texto = document.getElementById("textoEntrada").value.toLowerCase();
    let resultado = "";

    if (opcao === "criptografar") {
        resultado = criptografar(texto);
    } else if (opcao === "descriptografar") {
        resultado = descriptografar(texto);
    }
    document.getElementById("resultado").value = resultado;
    document.querySelector(".saida__dados").style.display = "none";
    document.querySelector(".saida__conteudo").style.display = "flex";  
  }

  function copiarTexto() {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      const mensagem = "Para copiar o texto, pressione e segure o texto acima, selecione todo o texto e clique na opção 'Copiar'.";
      alert(mensagem);
    } else {
      let textoCopiado = document.getElementById("resultado").value;
      navigator.clipboard.writeText (textoCopiado);
      alert("O texto que você copiou é: " + textoCopiado);
    }  
  }