import axios from 'axios';



const getDataAction = () => (dispatch) => {

    dispatch({
        type : 'DATA_LOADING'
    });
    axios.get('https://api.github.com/users').then(res => {
        console.log(res.data);
        const {data} = res
        dispatch({
            type : 'DATA_SUCCESS',
            payload : data
        });
    }).catch(err =>{
        dispatch({
            type : 'DATA_FAILED',
            payload : err
        });
    })
    
}

export default getDataAction;