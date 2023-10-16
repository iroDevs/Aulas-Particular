const pegueUsuarios = require('./SimulandoPromisse');

async function getUsuarios(){
    try {
        const usuarios = await pegueUsuarios(true);
        console.log(usuarios);
    } catch (error) {
        console.log(error);
    }
 }

    getUsuarios();
    console.log("aaaa");