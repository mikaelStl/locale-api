import Marker from "./assets/Marker";

let increment = 0;

async function savePoint(marker: Marker) {
    try {
        const point = {
            name: `local ${increment+=1}`,
            coordinates: marker.getPosition()
        }
  
        const resp = await fetch('http://localhost:3000/location', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(point)
        });
        
        if (!resp.ok) {
            throw new Error('ERROR IN REQUEST');
        }
  
        console.log('SUCESS');
        console.log(resp);
    } catch (error) {
        console.log('ERROR: ' + error);
    }
}

async function getPoints() {
    try {
        const resp = await fetch('http://localhost:3000/location', {
          method: 'GET',
          headers: {
            'Accept': 'application/json'
          },
        });

        if (!resp.ok) {
            throw new Error('ERROR IN REQUEST');
        }
  
        const locals = await resp.json();
        console.log(locals);

    } catch (error) {
        console.log('ERROR: ' + error);
    }
}

export { savePoint, getPoints };