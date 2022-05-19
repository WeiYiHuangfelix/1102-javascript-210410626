const btn = document.querySelector('.btn');
btn.addEventListener('click',() => {
 
const request = new XMLHttpRequest();
request.open('GET', 'api/sample.txt'); //取得入徑

request.onreadystatechange = () => {
    
  
if (request.readyState === 4 && request.status === 200) {
console.log({ status: request.status, text: request.statusText });
  const textEl = document.createElement('h4');
 textEl.textContent = request.responseText;
 document.body.appendChild(textEl); //appendChild 插入最後面
 }
};

request.send();
console.log(request);

});