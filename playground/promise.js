var asyncAdd = (a,b) =>
{
  return new Promise((resolve, reject) =>
  {
    setTimeout(() =>
    {
      if (typeof a === 'number' && typeof b === 'number')
      {
        resolve(a+b);
      } else
      {
        reject('Both arguments must be numbers');
      }
    }, 3500);
  });
};

/*
var somePromise = new Promise((resolve, reject) => {
setTimeout(() =>
{
  //resolve('It worked.');    // action on resolution
  reject('Unable to fulfil promise');
}, 4500);
});
*/

asyncAdd(5,7).then((result) =>
{
  console.log('Result: ', result);
  return asyncAdd(result, 44);
}/*,  (errorMessage) =>
  {
    console.log(errorMessage);
  }*/).then((result) =>    // chaining of promises
  {   // success
      console.log('Should be 56: ', result);
  }/*
  ,(errorMessage) =>
  {       // failure
    console.log('Error: ', errorMessage);
})*/
)
.catch( (error) =>
  {
      console.log('Error: ', error)
  }
);

/*
somePromise.then((message) =>     // this function only called if Promise fulfilled, with value passed to resolve
{
  console.log('Success : ', message)
}, (errorMessage) => {
  console.log('Error: ', errorMessage)
})
.catch ((error) => {
  console.log("Promise rejected: ", error);
})
*/
// Promise with a switch of resolve or reject
