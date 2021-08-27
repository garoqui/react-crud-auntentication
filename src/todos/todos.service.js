import axios from 'axios';
import {SERVERTODOS } from '../constants/server'



export const apiTodos = {

    getTodos : function(){
        return axios.get(SERVERTODOS).then(res=>res.data)
    },

    getTodosById : function( id){
        console.log(`${SERVERTODOS}${id}`)
        return axios.get(`${SERVERTODOS}${id}`).then(res=>res.data)
    },

    newTodos : function( todo ){
        return axios.post(SERVERTODOS, todo).then(res=>res.data)
    },

    deleteTodos : function( id ){
        return axios.delete(`${SERVERTODOS}${id}`).then(res=>res.data)
    },

    updateTodos : function( id,todo ){
        return axios.put(`${SERVERTODOS}${id}`, todo).then(res=>res.data)
    },



}