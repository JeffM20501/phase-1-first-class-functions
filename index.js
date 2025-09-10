const callBack=()=>{
    return "Hello"
}

const receivesAFunction=(callBack)=>{
    callBack()
}

const returnsANamedFunction=()=>{
    return callBack
}

const returnsAnAnonymousFunction=()=>{
    return function(){
        return "Hello"
    }
}