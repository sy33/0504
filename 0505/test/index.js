

// function test(callback){
//     setTimeout(()=>{
//         callback();
//     }, 1000);
// }

// console.log('test start');
// test(()=>{
//     console.log('after 1 start');
// });
// console.log('test done');



// function test(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve();
//         }, 1000);
//     })

// }

function fetchData(){
    return new Promise((resolve,reject)=>{  //

        const data = {user:'jack'};
        resolve(data); // 성공
        // reject('aa');     // 실패
    })
}

fetchData()
    .then((result)=>{
        console.log(result);
        return 2;
    })
    .then((result)=>{
        console.log(result);
    })
    .catch((err)=>{
        console.log(err);
        return 'err'
    })
    .then((result)=>{
        console.log('done')
    })
