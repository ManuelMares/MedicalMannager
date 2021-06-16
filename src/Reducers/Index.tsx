import isLoggedReducer from './IsLogged';
import {combineReducers} from 'redux';


const AllReducers = combineReducers({
	islogged: isLoggedReducer
})

export default AllReducers