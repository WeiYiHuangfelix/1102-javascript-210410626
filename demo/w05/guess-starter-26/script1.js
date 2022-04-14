let bills = [125, 100, 250, 555, 44, 350];
let total = [];
let tips = [];
for (let i = 0; i < bills.length; i++) {
  if (bills >= 50 && bills <= 300) {
    tips.push(bills[i] * 0.15)
  } else {
    tips.push(bills[i] * 0.2)
  }
  total.push(bills[i] + tips[i])
};
console.log('bills', bills)
console.log('tips', tips);
console.log('total', total)
