"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let increment = 0;
function savePoint(marker) {
    const point = {
        name: `local ${increment += 1}`,
        coordinates: marker.getPosition()
    };
    fetch('http://localhost:3000/location', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/jsons'
        },
        body: JSON.stringify(point)
    }).then(response => {
        alert('SAVED WITH SUCESS');
    }).catch(erro => {
        alert('FAILED: ' + erro);
    });
}
// fetch("http://localhost:3000/pontos",{
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(obj)
//     }).then(response =>{alert('Salvo com sucesso')})
//     .catch(error => alert('Falha ao salvar!'));
