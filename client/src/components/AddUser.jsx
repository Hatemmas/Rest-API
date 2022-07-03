import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUsers } from '../redux/actions'
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

const AddUser = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const dispatch = useDispatch()
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    const handleSubmit = (e) => {e.preventDefault()
        const newUser = {
            fullName, email, phone
        }
    dispatch(addUsers(newUser))
    closeModal()
  }
  return (
    <div className='addUser'>
    <button onClick={openModal}>+</button>
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

export default AddUser