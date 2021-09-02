const getDataReducer = (state = {data : null , loading : false, isError : false} , action) =>{
    if(action.type === 'DATA_LOADING'){
        return{
            data : null,
            loading : true,
            isError : false
        }
    }
    else if(action.type === 'DATA_SUCCESS'){
        return{
            data : action.payload,
            loading : false,
            isError : false
        }
    }
    else if(action.type === 'DATA_FAILED'){
        return{
            data : null,
            loading : false,
            isError : true
        }
    }
    else{
        return{
            state
        }
    }
}

export default getDataReducer;