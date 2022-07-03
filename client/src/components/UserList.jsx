import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, getUsers } from '../redux/actions'
import EditUser from './EditUser'

const UserList = () => {
    const {users, loading, msg} = useSelector((state) => state)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getUsers())
    }, [])
    
  return (
    <div >
        {
            loading ? <h2>loading...</h2> : users.map ((el) => (
                <div className='userCard'>
                    <h2>{el.fullName}</h2>
                    <p>{el.email}</p>
                    <EditUser user={el} />
                    <button className='btn' onClick={() => dispatch(deleteUser(el._id))} >Delete</button>
                </div>
            ))
        }
        {msg && <h2>{msg}</h2> }
    </div>
  )
}

export default UserList