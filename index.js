//importando modulo fileSystem nativo do node para utilizar funcoes prontas
//https://nodejs.org/dist/latest-v18.x/docs/api/fs.html#fsreadfilepath-options-callback
const fs = require('fs');
const filePath = './README.md';
//funcao pronta do fileSystem que retorna o conteudo do arquivo ou o erro
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error("[*] Failed => ", err);
    return;
  }
  console.log("[*] Sucess \n\n\n\n", data);
});