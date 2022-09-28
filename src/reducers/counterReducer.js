const counterReducer = (state,action) =>{
 if(action === 'add'){
    return state +1;
  }else{
    return state -1;
  }
}

export {counterReducer}