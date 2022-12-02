import { createReducer } from "@reduxjs/toolkit";
import userActions from "../actions/userActions";

const { login, reLogin, logout, getUser, updateUser } = userActions;

const initialState = {
    name: '',
    email: '',
    photo: '',
    role: '',
    online: false,
    token: '',
    id: '',
    user: {},
};

const userReducers = createReducer(initialState, (builder) => {
    builder
        .addCase(login.fulfilled, (state, action) => {
            const { success, response } = action.payload;
            if (success) {
                let { user, token } = response
                localStorage.setItem("token", JSON.stringify({ token: { user: token } }))
                return { ...state, name: user.name, email: user.email, photo: user.photo, role: user.role, online: true, token: token }
            } else {
                return { ...state, mensaje: response }
            }
        })
        .addCase(reLogin.fulfilled, (state, action) => {
            const { success, response } = action.payload;
            let { user, token } = response
            if (success) {
                return { ...state, name: user.name, email: user.email, photo: user.photo, role: user.role, online: true, token: token }
            } else {
                return { ...state, mensaje: response }
            }
        })
        .addCase(logout.fulfilled, (state, action) => {
            const { success, response } = action.payload;
            if (success) {
                localStorage.removeItem("token")
                return { ...state, name: '', email: '', photo: '', role: '', online: false, token: '' }
            } else {
                return { ...state, mensaje: response }
            }
        })

        .addCase(getUser.fulfilled, (state,action) => {
            if (action.payload.success){
                return{
                    ...state, user: action.payload.response
                }
            }
        }) 

        .addCase(updateUser.fulfilled, (state, action) => {
            if (action.payload.success) {
                return { ...state, user: action.payload.response , name: action.payload.response.name, photo: action.payload.response.photo, email: action.payload.response.email }
            }
        })
        
})

export default userReducers