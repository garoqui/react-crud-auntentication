import react, {useEffect, useState} from 'react'
import { Modal, Button, notification } from 'antd';
import { EditTwoTone } from '@ant-design/icons';
import { apiTodos } from './todos.service';
import FormEdit from './todosEditForm';

const ModalEditTodos = (props)=>{

    const [isModalVisible, setIsModalVisible] = useState(false);

    const [ todoDetail , setTodoDetail] = useState("")

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

    useEffect(()=>{
      getTodo()
    //   setTodoDetail({
    //     "_id": "6127ac9edc46c203e8b3c91f",
    //     "name": "Alejandro",
    //     "lastName": "Quiroga",
    //     "age": "44",
    //     "ocupation": "DEVELOPER",
    //     "isActive": "true"
    // })
    //   props._id ? setTodoDetail( getTodo()) : setTodoDetail({})
     },[props.todo])

    const getTodo = async()=>{
      try{       
      await apiTodos.getTodosById(props.todo).then(res=>setTodoDetail(res))
      console.log(todoDetail) 
    //   let todo = {
    //     "_id": "6127ac9edc46c203e8b3c91f",
    //     "name": "Alejandro",
    //     "lastName": "Quiroga",
    //     "age": "44",
    //     "ocupation": "DEVELOPER",
    //     "isActive": "true"
    // }
      //setTodoDetail(todoDetail)
    
    }catch(e){
        openNotification("Error", "No se pudo eliminar el item", "red")
      }
      
    }

    const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };

    return(
        <>
          <EditTwoTone twoToneColor="#eb2f96" onClick={showModal} />
            
      <Modal title="Basic Modal"
       visible={isModalVisible} 
       onOk={handleOk} 
       onCancel={handleCancel}
       footer={[]}
       >
        <FormEdit setIsModalVisible= {setIsModalVisible} todoDetail={todoDetail}></FormEdit>        
      </Modal>
        </>

    )
}

export default ModalEditTodos