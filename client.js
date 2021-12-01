const axios = require('axios').default;

const postRequest = async () => {
    try{
        const resp = await axios.post('http://localhost:3000/books', {
            ID: 3,
        name: 'My Boook',
        author: 'Me and only me'
        })
        console.log(resp.data)
    }
    catch(err) {
        console.log(err.response.data);
    };
}

//Exercicio 1 - novo livro
const postRequest2 = async () => {
    try{
        const resp = await axios.post('http://localhost:3000/books', {
            ID: 4,
            name: 'Books on the table',
            author: 'Zyon'
        })
        console.log(resp.data)
    }
    catch(err) {
        console.log(err.response.data);
    };
}

//Exercício 1 - livro repetido
const postRequest3 = async () => {
    try {
        const resp = await axios.post('http://localhost:3000/books', {
            ID: 2,
            name: 'Os Lusiadas',
            author: 'Luis de Camoes'
        })
        console.log(resp.data)
    }
    catch(err) {
        console.log(err.response.data);
    };
}

//Exercício 2 - requests um-a-um
const getRequest1 = async () => {
    try {
        const resp = await axios.get('http://localhost:3000/books')
        await axios.get('http://localhost:3000/books/' + response.data.ID)
        console.log(response.data);
    } catch (err) {
        console.log(err.response.data);
    }
};

const getRequest1 = async () => {
    try {
        const resp = await axios.get('http://localhost:3000/log')
        console.log("Quantidade de requests:" + response.data);
    } catch (err) {
        console.log(err.response.data);
    }
};
