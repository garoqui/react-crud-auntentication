import react, {useState} from 'react'
import { Modal, notification } from 'antd';
import { DeleteTwoTone } from '@ant-design/icons';
import { apiTodos } from "./todos.service";

const ModalDeleteTodos = (props)=>{

    const [isModalVisible, setIsModalVisible] = useState(false);

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

    const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = async() => {
        await deleteItem()
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };

      const deleteItem = async()=>{
        try{
          await apiTodos.deleteTodos(props.id).then(res=>openNotification("Exito", "Item eliminado correctamente", "green"))
        }catch(e){
          openNotification("Error", "No se pudo eliminar el item", "red")
        }
       
      }

    return(
        <>
          <DeleteTwoTone twoToneColor="#52c41a" onClick={showModal} />
            
      <Modal title="Confirmar Eliminar" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Esta seguro en elimnar el item con id? :</p><strong> {props.id}</strong>
        
      </Modal>
        </>

    )
}

export default ModalDeleteTodos