export const login = (user)=>{
        return(dispatch)=>{
            dispatch(
                {                    
            type : "login",
            user : user
            })
        }
}

export const logout = (user)=>{
    return(dispatch)=>{
        dispatch(
            {                    
        type : "login",
        data : user
        })
    }
}