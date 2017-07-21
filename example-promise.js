
function addPromise(a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('a & b need to be numbers')
    }
  })
}

addPromise(2, 3).then(function (sum) {
  console.log('add promise success', sum)
}, function (err) {
  console.log('add promise err', err)
});

addPromise('andrew', 9).then(function (sum) {
  console.log('add promise success', sum)
}, function (err) {
  console.log('add promise err', err)
});
