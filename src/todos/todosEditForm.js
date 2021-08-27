import { Form, Input, Button, Checkbox, InputNumber, Select, Option, Switch, notification } from 'antd';
import 'antd/dist/antd.css';
import { apiTodos } from './todos.service'



const FormEdit = (props) => { 
    
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

    function handleChange(value) {
        console.log(`selected ${value}`);   
    }

    const onFinish = async(values) => {
        await editItem(values)
        console.log('Success:', values);
        props.setIsModalVisible(false);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onCancel = ()=>{
        props.setIsModalVisible(false)
    }

    const editItem = async(item)=>{
        await apiTodos.updateTodos(props.todoDetail._id,item).then(res=>openNotification("Exito", "Item modificado correctamente", "green"))
    }

    

    return (
        <div className="container-formLogin">
            
            
            <Form name="editTodoForm"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                initialValues={{
                    name:props.todoDetail.name,
                    lastName:props.todoDetail.lastName,
                    ocupation:props.todoDetail.ocupation,
                    age:props.todoDetail.age,
                    isActive:props.todoDetail.isActive
                }}

            >
                <Form.Item
                    label="Nombre"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'El nombre es requerido!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Apellido"
                    name="lastName"
                    rules={[
                        {
                            required: true,
                            message: 'El apellido es requerida!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item 
                label="Ocupacion"
                name = "ocupation"
                rules={[
                    {
                        required: true,
                        message: 'La ocupacion es requerida!',
                    },
                ]}  
                >
                    <Select  defaultValue="Seleccione la ocupación" style={{ width: 120 }} onChange={handleChange}>
                    <Select.Option  value="DESARROLLADOR">DESARROLLADOR</Select.Option>
                    <Select.Option  value="ANALISTA">ANALISTA</Select.Option>
                    <Select.Option  value="ARQUITECTO">ARQUITECTO</Select.Option>                        
                    </Select>
                </Form.Item>


                <Form.Item
                    label="Edad"
                    name="age"

                    rules={[
                        {
                            required: true,
                            message: 'La edad es requerida!',
                        },
                    ]}    >
                    <InputNumber />
                </Form.Item>

                <Form.Item label="Activo" name="isActive" valuePropName="checked">
                    <Switch />
                </Form.Item>



                <Form.Item>
                    <Button type="primary" htmlType="submit">Aceptar</Button>
                    <Button type="success" htmlType="submit" onClick= {()=>onCancel()}>Cancelar</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default FormEdit



