function criptografar(){
    var textoRecebido = document.getElementById("texto").value;
    var textoCriptografado = criptografarTexto(textoRecebido);
    document.getElementById("imagem-lupa").innerText = textoCriptografado;
}

function criptografarTexto (texto){
    var textoCriptografado = "";
    for (var i = 0; i < texto.length; i ++) {
        var caracter = texto.charAt(i).toLowerCase();
        switch (caracter) {
            case 'e':
                textoCriptografado += "enter";
                break;
            case 'i':
                 textoCriptografado += "imes";
                break;
            case 'a':
                textoCriptografado += "ai";
                break;
            case 'o':
                textoCriptografado += "ober";
                break;
            case 'u':
                textoCriptografado += "ufat";
                break;
            default:
                textoCriptografado += caracter;
        }
    }
    return textoCriptografado;
}
