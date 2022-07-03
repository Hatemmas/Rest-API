const { GETUSERS, ADDUSERS, DELETEUSERS, EDITUSERS } = require("./actionTypes");


const init = {
    users: null,
    loading: true,
    msg: null
}

const reducer = (state=init, {type, payload}) => {
   switch (type) {
    case GETUSERS:
    return {
        ...state, loading:false, users:payload
    }  
    case ADDUSERS:
        return {
            ...state, users:[...state.users, payload]
        }
    case DELETEUSERS:
        return {
            ...state, 
            msg: payload.msg, 
            users: state.users.filter
                ((el) => el._id !== payload.id)
        }
    case EDITUSERS:
        return {
            ...state, 
            users:state.users.map(el => el._id === payload.id ? payload.data : el)
        }
    default:
        return state
   }
}

export default reducer