// Given a positive integer millis,
//  write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

async function sleep(millis){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(), millis);
    })
    return promise;
}

