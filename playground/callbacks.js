var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Niall'
  };

  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(13, (userObject) => { // arrow/lambda function passed in
  console.log(userObject);
});

// https://www.udemy.com/the-complete-nodejs-developer-course-2/learn/v4/questions/2956062
// pX8PCBe1xKpGx9ZBf05T9bXmJU1kePLv
// http://www.mapquestapi.com/geocoding/v1/address?key=KEY&location=1301%20lombard%20street%20philadelphi
// http://www.mapquestapi.com/geocoding/v1/address?key=pX8PCBe1xKpGx9ZBf05T9bXmJU1kePLv&location=67%20Trevingey%20Road%20Redruth
