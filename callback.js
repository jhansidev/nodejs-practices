// callback practices from here -->
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
