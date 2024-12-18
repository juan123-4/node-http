// const data= require('./data.js');
// const http = require('http');

// const server = http.createServer((req, res) => {
//   console.log('Request received');

//   res.writeHead(200, { 'Content-Type': 'text/html' });

//   res.end(`<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//    <h1>Hobbies</h1> 
//    <p>${data.Hobbies.Que_es}</p>
//    <h2>Películas de Acción</h2> 
//     <ul> 
//     ${data.pagina}
//     hola
//     </ul>
//    <h2>Anime</h2> 
//     <ul> 
      
//     </ul> <h2>Fútbol</h2>
//    <p>${data.Futbol}</p>
// </body>
// </html>`);
// });

// server.listen(0, () => {
//   console.log(
//     `server listening on port http://localhost:${server.address().port}`
//   );
// });
// data.js


// server.js
const data = require('./data.js');
const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Request received');

  const hobbiesData = JSON.parse(data.pagina()); // Parse the JSON string returned by pagina()

  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
 <h1>Hobbies</h1> 
 <p>${hobbiesData[0].Que_es}</p>
 <h2>Películas de Acción</h2> 
  <ul> 
  ${hobbiesData[1].verPeliculas_accion.map(movie => `<li>${movie}</li>`).join('')}
  </ul>
 <h2>Anime</h2> 
  <ul> 
  ${hobbiesData[2].Ver_anime.map(anime => `<li>${anime}</li>`).join('')}
  </ul>
 <h2>Fútbol</h2>
 <p>${hobbiesData[3].Futbol}</p>
</body>
</html>`);
});

server.listen(0, () => {  // Changed port to 3000
console.log(`Server listening on port http://localhost:${server.address().port}`);
});

