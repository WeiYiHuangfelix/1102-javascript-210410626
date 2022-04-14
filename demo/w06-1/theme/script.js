const main = document.querySelector('#main');
const addUserBth = document.querySelector('#add-user');
const doubleBth = document.querySelector('#double');
const showMillionariesBtn = document.querySelector('#show-millionaires');
const sortBth = document.querySelector('#sort');
const calculateBth = document.querySelector('#calculate-wealth');


let data = [];

const config = {
  numRandom: 5,
  ratio: 1.5,
  showCondition: 2000000
}



const updataDOM = (providedData = data) => {  //如果沒有參數就用data
  let tempData = providedData.map((item) => {
    return `
  <div class="person"><strong>${item.name}</strong>${formatMoney(item.money)}</div>
  `
  });
  tempData = tempData.join('');
  console.log('tempData', tempData);
  main.innerHTML = `<h2><strong>Person</strong> Wealth</h2> ${tempData}`
}

const addData = (obj) => {
  data.push(obj);
  console.log('data', data);
  updataDOM();
}

// Format number as money - https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
function formatMoney(number) {
  return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}


const getRandomUser = async () => {
  for (i = 0; i < config.numRandom; i++) {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();
    console.log('random user data', data);
    const user = data.results[0];
    const newUser = {
      name: `${user.name.first} ${user.name.last}`,
      money: Math.floor(Math.random() * 10000000)
    }
    addData(newUser);
  }
}

// getRandomUser();
// getRandomUser();
// getRandomUser();

const doubleMoney = () => {
  data = data.map((user) => { //空值的data
    return {
      name: user.name,
      money: user.money * config.ratio
    }
  });
  updataDOM();
}

const showMillionaries = () => {
  const filteredData = data.filter((user) => {
    return user.money > config.showCondition;
  });
  console.log('filteredData', filteredData);
  updataDOM(filteredData);
}

addUserBth.addEventListener('click', getRandomUser);
doubleBth.addEventListener('click', doubleMoney);
showMillionariesBtn.addEventListener('click', showMillionaries);
