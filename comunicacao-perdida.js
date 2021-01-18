const giz = require('chalk')


function temperaturaPaciente() {
    const min = 36.0;
    const max = 42.0;

    const temp = setTimeout( () => (Math.random() * (max - min) + min).toFixed(2), 3000 );

    //const temp = (Math.random() * (max - min) + min).toFixed(2);
    return temp;
}


const promessa = new Promise( (resolve, reject) => {
    if (temperaturaPaciente() >= 37.5) {
        resolve("Paciente Febril")
    } else {
        reject("Paciente Não-Febril")
    }
})



//Resolve
.then( (resolve) => {
    () => console.log(`Alerta: ${resolve}`)
})


//Reject
.catch( (reject) => {
    () => console.log(`Sucesso: ${reject}`)
});
