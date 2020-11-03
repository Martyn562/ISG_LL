//first returns {promise<3>}
function makePromiseResolveWith3(){
  
   return new Promise( resolve => { 

    resolve(3);

    });

}
//second returns promise<"Boo!">
function makePromiseRejectWithBoo(){
    return new Promise( reject=> { 

        reject("Boo!");
        
    });
}

//third  is ShouldResolve - Whether the promise should resolve or reject
function makePromiseWithConstructor(itShouldResolve){

    return new Promise((resolve, reject) => {
        itShouldResolve ? resolve(true) : reject(false);
      });    

}

//fourth A promise that will resolve with the value after delayInMs milliseconds
function makeDelayPromise(value, delayInMs){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(value);
        }, delayInMs);
    }) ;
}

 //part 2

//first wait for promise then action.
function waitForPromise(promise, action){
    promise.then(action);
}
  
//second consumePromise after promise
function consumePromise(promise, consumer, handler){
    promise.then( thunk => {
        consumer(handler(thunk))
    });
}
