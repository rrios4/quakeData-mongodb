const { response } = require("express");

function getQuakes(event){
    fetch('http://localhost:3001/api/octoberquakes')
    .then((response) => response.json())
    .then((data) => {
        let output = '<p style= "align-items: center; color: red;">Data from mongodb</p>';
        console.log(data);
        data.forEach(function(quake){
            output += `
            <tr>
            <td>${quake.locationSource}</td>
            <td>${quake.place}</td>
            <td>${quake.latitude}</td>
            <td>${quake.longitude}</td>
            <td>${quake.depth}</td>
            <td>${quake.mag}</td>
            <td>${quake.magType}</td>
            <td>${quake.gap}</td>
            <td></td>
          </tr> 
            `
        })
        document.getElementById('tableBody').innerHTML = output
    })
}
