import react, {useEffect, useState} from 'react'
import { Modal, Button, notification } from 'antd';
import { apiTodos } from './todos.service';
import FormNew from './todosNewForm';

const ModalNewTodos = (props)=>{

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
      setTodoDetail({
        "_id": "6127ac9edc46c203e8b3c91f",
        "name": "Alejandro",
        "lastName": "Quiroga",
        "age": "44",
        "ocupation": "DEVELOPER",
        "isActive": "true"
    })
    //   props._id ? setTodoDetail( getTodo()) : setTodoDetail({})
     },[props._id])

    const getTodo = async()=>{
      try{
        let todo = await apiTodos.getTodosById(props.id).then(res=>res) 
      return todo
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
          <Button className="bg-success text-white" onClick={showModal}>
        Nuevo
      </Button>
            
      <Modal title="Nuevo Item"
       visible={isModalVisible} 
       onOk={handleOk} 
       onCancel={handleCancel}
       footer={[]}
       >
        <FormNew setIsModalVisible= {setIsModalVisible}></FormNew>        
      </Modal>
        </>

    )
}

export default ModalNewTodos