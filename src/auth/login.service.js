import axios from 'axios'


const LoginService = ( data )=> {   
    return axios.post('http://dev.nexttruck.draketechdev.ca:3600/api/login/', data )
    
}

export default LoginService
 