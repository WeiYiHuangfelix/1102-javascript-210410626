// const url = '../api/people.json';
 
//fetch(url).then((Response) =>console.log (Response.json())).then().catch();

fetch('../api/people.json')
.then(Response => console.log (Response.json()))