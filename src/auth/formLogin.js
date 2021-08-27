import { Form, Input, Button, Checkbox, notification } from 'antd';
import { Redirect, Link } from "react-router-dom";
import 'antd/dist/antd.css';
import './formLogin.css';
import LoginService  from './login.service';
import {useSelector, useDispatch} from 'react-redux';
import { actionCreators } from '../state/index'
import { bindActionCreators } from 'redux';

const FormLogin = () => {

  const auth = useSelector((state)=> state.auth)
  const dispatch = useDispatch()

  const { login, logout} = bindActionCreators(actionCreators, dispatch)

  const onFinish = async(values) => {  
    try{
      LoginService( values).then((res)=>{       
        login(res.data)  
        console.log(res)      
        openNotification("Bienvenid@", "Inicio de sesion correcto", "green")           
    })
  }catch(e){
    openNotification("Error", "Error en el login", "red")
  }      // openNotification("Error", "Error en el login", "red")
    
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const openNotification = (title, msj, color) => {
    notification.open({
      message: title,
      description:
        msj,
        style: {
         backgroundColor: color ,
          color : 'white'
        },
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };



  return (
    <div class="container-formLogin">
      <Form name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
      
        <Form.Item
          label="Usuario"
          name="email"
          rules={[
            {
              required: true,
              message: 'El ususario es requerido!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'La contraseña es requerida!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">Iniciar Sesion</Button>
        </Form.Item>
      </Form>
    </div>
  )




}

export default FormLogin


