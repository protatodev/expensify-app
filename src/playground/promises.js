const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('This is my resolved data');
      //reject('Error. 404 Server Not Found!');
    }, 5000);
  });
};

const promise = getData();

promise.then(data => {
  console.log(data);

  return 'some data';
}).then(response => {
  console.log(response);
}).catch(err => {
  console.log(err);
});