function fazerAlgoAssincrono(success) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const sucesso = success; 
        if (sucesso) {
          resolve("Operação bem-sucedida!");
        } else {
          reject("Ocorreu um erro!");
        }
      }, 3000); 
    });
  }

  modole.exports = fazerAlgoAssincrono;