var somePromise = new Promise((resolve, reject) => {
setTimeout(() =>
{
  //resolve('It worked.');    // action on resolution
  reject('Unable to fulfil promise');
}, 4500);
});

somePromise.then((message) =>     // this function only called if Promise fulfilled, with value passed to resolve
{
  console.log('Success : ', message)
}, (errorMessage) => {
  console.log('Error: ', errorMessage)
})
.catch ((error) => {
  console.log("Promise rejected: ", error);
})

// Promise with a switch of resolve or reject
