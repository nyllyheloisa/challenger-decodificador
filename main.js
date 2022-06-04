var adicionaImagem = document.querySelector('.resultado');
adicionaImagem.classList.add('adiciona-imagem');

var botao = document.querySelector('.copiar');
botao.classList.add('sumir')

var textoParaConverter = document.querySelector('.criptografar-descriptografar');
var mensagem = document.querySelector('.resultado')

function btnEncriptar() {
 let textoConvertido = encriptar(textoParaConverter.value);
  mensagem.value = textoConvertido
  textoParaConverter.value = ""
  adicionaImagem.classList.remove('adiciona-imagem');
  botao.classList.remove('sumir');
}

function btnDescriptar() {
  let textoConvertido = descriptar(textoParaConverter.value);
  mensagem.value = textoConvertido;
  textoParaConverter.value = ""
  adicionaImagem.classList.remove('adiciona-imagem');
  botao.classList.remove('sumir');
}

function btnCopiar() {  
  navigator.clipboard.writeText(mensagem.value);
}

function encriptar(textoParaConverter) {
  let matrizCodigo = [["i", "imes"], ["a", "ai"], ["e", "enter"], ["o", "ober"], ["u", "ufat"]];
  var textoParaConverter = textoParaConverter.toLowerCase();
  
  for(let i = 0; i < matrizCodigo.length; i++) {
    if(textoParaConverter.includes(matrizCodigo[i][0])) {
      textoParaConverter = textoParaConverter.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
  }
  return textoParaConverter
}

function descriptar(textoParaConverter) {
  let matrizCodigoDescriptar = [["ai", "a"], ["enter", "e"], ["imes", "i"], ["ober", "o"], ["ufat", "u"]];
  var textoParaConverter = textoParaConverter.toLowerCase();

  for(let i = 0; i < matrizCodigoDescriptar.length; i++) {
    if(textoParaConverter.includes(matrizCodigoDescriptar[i][0])) {
      textoParaConverter = textoParaConverter.replaceAll(matrizCodigoDescriptar[i][0], matrizCodigoDescriptar[i][1])
    }
  }
  return textoParaConverter
}