console.log('Starting app');

setTimeout(() => {
  console.log('Inside of  callback')
},2000);

setTimeout(() =>
{
  console.log('This callback\'s delay should be zero milliseconds')
},0);   // even with zero millisecond delay, printed after final non-async log

console.log('Finishing up');
