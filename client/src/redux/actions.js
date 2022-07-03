import axios from "axios"
import { ADDUSERS, DELETEUSERS, EDITUSERS, GETUSERS } from "./actionTypes"


      export const getUsers = () => async(dispatch) => {
        try {
            const res = await axios.get('/users')
            console.log(res)
            dispatch({
                type:GETUSERS,
                payload: res.data,
            })
        } catch (error) {
            alert('get error!')
        }
      }

      export const addUsers =  (newUser) => async(dispatch) => {
        try {
            const res = await axios.post('/add', newUser)
            console.log(res)
            dispatch({
                type: ADDUSERS,
                payload: res.data
            })
        } catch (error) {
            alert('add error')
        }
      }

      export const deleteUser = (id) => async (dispatch) => {
        try {
            const res = await axios.delete(`/users/${id}`)
            dispatch ({
                type: DELETEUSERS,
                payload: {id, msg: res.data}
            })
        } catch (error) {
            alert('Delete error')
        }
      }

      export const editUser = (editedUser) => async (dispatch) => {
        try {
            const res = await axios.put(`/edit/${editedUser._id}`, editedUser)
            dispatch({
                type: EDITUSERS,
                payload: {
                    id: editedUser._id, 
                    data: res.data
                }
            })
        } catch (error) {
            alert('edit error')
        }
      }

