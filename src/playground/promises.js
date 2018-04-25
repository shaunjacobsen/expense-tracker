const promise = new Promise((resolve, reject) => {
  resolve('resolved data');
});

promise.then(data => {
  console.log(data);
});
