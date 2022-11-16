import { createSlice } from "@reduxjs/toolkit";




const loginSlice = createSlice({
    name: "loginManager",
    initialState: {
        email: null,
        firstName: null,
        lastName: null,
        isConnected: false,
        token: null,
      },
    reducers: {
        // On récupère le token lors du login pour le mettre dans le State
        login: (state, action) => {
            return {
                ...state,
                isConnected: true,
                token: `${action.payload.token}`
            }
        },

        logout: (state, action) => {
            return {
                ...state,
                isConnected: false,
                token: ""
            }
        }

        // On récupère les infos de l'utilisateur
        // getUser: (state, action) => {
        //     return {
        //         ...state,
        //         firstName: action.payload.firstName,
        //         lastName: action.payload.lastName,
        //     }
        // },
    },
})

// On extrait les actions et le reducer
const {actions, reducer} = loginSlice;
// On exporte chaque action individuellement
export const { login, getUser, logout } = actions;
// On exporte le reducer par défaut
export default reducer;
