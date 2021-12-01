const fs = require('fs');
const express = require('express');

const app = express();

const getRequest = async () => {
    try {
        console.log('some request');

        // leitura async libera o event loop para processar outras requisicoes
        fs.readFile('./html/basic.html', 'utf-8', (err, data) => {
            if (err) {
                await res.send(err);
                return;
            }

            await res.send(data);
        });
    } catch (err) {
        console.log(err.response.data);
    }
}

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`);
});

console.log('End of the script');