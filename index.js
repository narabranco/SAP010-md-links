


const fs = require('fs');
const filePath = './README.md';

function getlinks(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const regex = /\[(.+?)\]\((http[s]?:\/\/[^\s]+)\)/g;
        const links = [];
        let match;

        while ((match = regex.exec(data)) !== null) {
          links.push({
            href: match[2],
            text: match[1],
            file: file, 
          });
        }

        // Adicionando logs para verificar os links encontrados
        console.log("Links encontrados:");
        console.log(links);

        resolve(links);
      }
    });
  });
}

module.exports = { getlinks }

