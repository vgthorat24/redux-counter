
const conterReducer=(state=0,action)=>{
        if(action.type=='INCREAMENT'){
            return state=state+1;
        }
        else if(action.type=='DECREAMENT'){
            return state=state-1;
        }
        else if(action.type=='CLEAR'){
            return state=0;
        }
        else{
            return state;
        }
   
}
export default conterReducer;