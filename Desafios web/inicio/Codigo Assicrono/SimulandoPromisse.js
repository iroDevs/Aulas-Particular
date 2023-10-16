//retonar uma promisse depois de 3 segundos com uma lista de usuarios fakes ou erro

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

//Fazer a função para retornar a promisse utilize o resolve e reject

const pegueUsuarios = (sucess) => {
    return new Promise((resolve, reject) => {
        
      setTimeout(() => {
        if (sucess) {
          resolve(usuarios);
        }else {
          let error = new Error("deu ruim aqui")
          reject(error);
        }
      }, 5000);

    });
}

module.exports = pegueUsuarios;