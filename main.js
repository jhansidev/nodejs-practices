const fetch = require('node-fetch')
let root = 'https://jsonplaceholder.typicode.com/todos/1'

function imgDownload(api,callback) {
    fetch(api).then(res=> {
        console.log('Api Response::',res)
        callback();
    }).catch(err=> console.log(err));


}
function callback(error,image){
    if(error)
        console.log("There is error in downloading");
    else
        console.log("downloading finished");
}

imgDownload(root, callback);

console.log("download started");


const promise1 =  new Promise((resolve,reject) => {
    setTimeout(resolve, 500, 'first value');
});

const promise2 =  new Promise((resolve,reject) => {
    reject(Error("oooops error"));
 });
const promise3 =  new Promise((resolve,reject) => {
    setTimeout(resolve, 100, 'third value');
});



promise1.then(data => {
    console.log(data);
 });
// after 500 ms
 //first value
promise2.then(data => {
    console.log(data);
});
// after 1000 ms
// second value

// using promise.all()
 Promise
    .all([promise1, promise2 ,promise3])
    .then(data => {
        const[promise1data, promise2data,promise3data] = data;
        console.log(promise1data, promise2data,promise3data);
    });

// one of the two promises will fail, but `.all` will return only a rejection.
Promise
    .all([promise1, promise2,promise3])
    .then(data => {
        const[promise1data, promise2data, promise3data] = data;
        console.log(promise1data, promise2data,promise3data);
    })
    .catch(err => {
        console.log(err);
    });
// Error: oooops error

// promise race
Promise.race([promise1, promise3,promise2]).then(function(value) {
  console.log(value);

});



// generator functions with promises
/* Using a generator in combination with a Promise will allow us to write asynchronous code that feels like synchronous code.
What we want to do is wait for a promise to resolve and then pass the resolved value back into our generator in the .next() call.
 */
const myPromise = () => new Promise((resolve) => {
    resolve("our value is...");
});

function* gen() {
    let result = "";
    // returns promise
    yield myPromise().then(data => { result = data }) ;
    // wait for the promise and use its value
    yield result + 'john is under custody';
};

// Call the async function and pass params
const asyncFunc = gen();
const val1 = asyncFunc.next();
console.log(val1);
// call the promise and wait for it to resolve
// {value: Promise, done: false}
val1.value.then(() => {
    console.log(asyncFunc.next());
})
// Object { value: "our value is... <result data given>, done: false }