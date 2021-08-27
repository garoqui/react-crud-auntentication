const authReducer = (state = [], action)=>{
    switch (action.type){
        case "login" :
            const resu = [action.user]
            return resu

        case "logout" :    
            return state

        default :
            return state
    }

}

export default authReducer