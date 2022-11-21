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
        // Action Login => On récupère le token et passe isConnected à "true" 
        login: (state, action) => {
            return {
                ...state,
                isConnected: true,
                token: `${action.payload.token}`
            }
        },

        // Action Logout => On vide le token et passe isConnected à "false"
        logout: (state, action) => {
            return {
                ...state,
                email: null,
                firstName: null,
                lastName: null,
                isConnected: false,
                token: null,
            }
        },

        // Action getUser => On récupère les infos de l'utilisateur
        getUser: (state, action) => {
            return {
                ...state,
                email: action.payload.email,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
            }
        },
    },
})

// On extrait les actions et le reducer
const {actions, reducer} = loginSlice;
// On exporte chaque action individuellement
export const { login, getUser, logout } = actions;
// On exporte le reducer par défaut
export default reducer;
