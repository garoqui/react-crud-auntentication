import React, { useEffect, useState } from "react";
import { apiTodos } from "./todos.service";
import { Container, Row, Col } from 'bootstrap-4-react';
import ModalNewTodos from './todosNew.modal'
import ModalEditTodos from "./todosEdit.modal";
import ModalDeleteTodos from "./todosDelete.modal";

const Todos = () => {

    const [todos, getTodos] = useState([])

    useEffect(() => {
        apiTodos.getTodos().then((res) => {
            getTodos(res)
        })
    }, [])

    const todostemp = [
        {
            "_id": "61256cbddc46c203e8b3c305",
            "name": "Alejandro",
            "lastName": "Quiroga",
            "age": "44"
        },
        {
            "_id": "61256d06dc46c203e8b3c306",
            "name": "Alejandro",
            "lastName": "Quiroga",
            "age": "44"
        },
        {
            "_id": "61256d08dc46c203e8b3c307",
            "name": "Alejandro",
            "lastName": "Quiroga",
            "age": "44"
        }
    ]


    return (
        <div>

            <h1>Todos</h1>

            <ModalNewTodos></ModalNewTodos>

            <Container className="mt-4">
                <Row className="p-3 bg-info text-white">
                    <Col col="sm ">Nombre</Col>
                    <Col col="sm">Apellido</Col>
                    <Col col="sm">Edad</Col>
                    <Col col="sm">Accion</Col>
                </Row>

                {todos.map(res=>{
                    return(
                        <Row key={res._id}>
                         <Col col="sm">{res.name}</Col>
                         <Col col="sm">{res.lastName}</Col>
                        <Col col="sm">{res.age}</Col>
                        <Col col="sm"> 
                            <ModalDeleteTodos id={res._id}></ModalDeleteTodos>
                            <ModalEditTodos todo={res._id}></ModalEditTodos>
                        </Col>
                        </Row>
                    )
                })}

                {/* {todostemp.map((res) => 
                
                (       
                                        
                    <Row key={res._id}>
                        <Col col="sm">{res.name}</Col>
                        <Col col="sm">{res.lastName}</Col>
                        <Col col="sm">{res.age}</Col>
                        <Col col="sm"> 
                            <ModalDeleteTodos id={res._id}></ModalDeleteTodos>
                            <ModalEditTodos todo={res}></ModalEditTodos>
                        </Col>
                    </Row>
                ))} */}
            </Container>
        </div>
    )
}

export default Todos