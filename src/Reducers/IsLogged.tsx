
const isLoggedReducer = (state = false, action:any) => {
	switch(action.type){
		case 'SIGNIN':
			return true;
		case 'SIGNOUT':
			return false;	
        default:
            return false;	
	}
}

export default isLoggedReducer;
