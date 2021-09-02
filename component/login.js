import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import getDataAction from '../redux/actions/user.action';




const LoginComponent = () => {


    const dispatch = useDispatch();
    const getData = useSelector(state => state.getData);

    const start = () => {
        dispatch(getDataAction());
    }

    useEffect(()=>{
        console.log(getData);
    });

    

    return(
        <React.Fragment>
            <h1>Click Me!</h1>
            <button onClick ={start}>Click</button>
        </React.Fragment>
    )
}

export default LoginComponent;