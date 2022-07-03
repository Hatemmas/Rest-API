import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editUser } from '../redux/actions'
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


Modal.setAppElement('#root');

const EditUser = ({user}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [fullName, setFullName] = useState(user.fullName)
    const [email, setEmail] = useState(user.email)
    const [phone, setPhone] = useState(user.phone)

    const dispatch = useDispatch()
    function openModal() {
        setIsOpen(true);
      }
    
      function closeModal() {
        setIsOpen(false);
      }
    const handleSubmit = (e) => {e.preventDefault()
        const editedUser = {
        _id: user._id,
        fullName, 
        email, 
        phone,
    }
        
    dispatch(editUser(editedUser))
    closeModal()
}
    

  return (
    <div>
         <button className='btn' onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}>
            <form action="" onSubmit={handleSubmit}> 
                <label htmlFor="">Name</label>
                    <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                <label htmlFor="">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="">Phone</label>
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <button>Add</button>
            </form>
      </Modal>
    </div>
  )
}

export default EditUser