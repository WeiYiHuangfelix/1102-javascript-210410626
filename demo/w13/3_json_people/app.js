const textEl = document.createElement('p');

const btn = document.querySelector('.btn');
const div = document.querySelector('.div');
const url = 'api/e.json';

const getData = url => {
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.send();

  if (request.readyState === 4 && request.status === 200)
    console.log({ status: request.status, text: request.statusText });

  btn.addEventListener('click', () => {
    const data = JSON.parse(request.responseText);

    data.forEach(el =>
      div.insertAdjacentHTML('beforebegin', `<p>${el.name}</p><img src="${el.url}" width="${el.width}" height="${el.height}" box_count="${el.box_count}">`)
    );

    console.log(data);
  });
};
getData(url);