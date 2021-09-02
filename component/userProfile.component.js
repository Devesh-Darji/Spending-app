import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {getAllUsersAction} from '../redux/actions/user.action';


function userProfileComponent(){
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllUsersAction());
    },[dispatch])
    
    
    return(
        <div>

        </div>
    )
}

export default userProfileComponent;