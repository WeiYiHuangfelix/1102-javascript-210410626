const promise = new Promise((resolve, reject) => { //成功，失敗
     let value = true;
    if (value) {
      resolve({ id: 1, name: 'john' });
    } else {
      reject('there is an error');
    }
  });
  
  console.log(promise);
  
  promise
    .then((data) => {
      console.log('data', data);
    })
    .catch((err) => console.log('error', err));