import axios from "axios"
const GET_PIC = "GET_PIC";
const REGISTER= "REGISTER";
const LOGIN= "LOGIN";
const UPDATE_PASSWORD = "UPDATE_PASSWORD";
const UPDATE_USERNAME = "UPDATE_USERNAME";

const initialState = {
    user: {},
    username: "",
    password: ""
   }

export const updatePassword = password => {
    console.log(password)
    return {
      type: UPDATE_PASSWORD,
      payload: password
    };
  };
  export const updateUsername = username => {
    console.log(username)
    return {
      type: UPDATE_USERNAME,
      payload: username
    };
  };
export function login( username,password) {
    console.log(username,password)
  return {
    type: LOGIN,
    payload: axios.post("/api/signin", { username, password })
  }
}
export const register = (username, password) => {
    console.log(username, password)
    return {
      type: REGISTER,
      payload: axios.post("/api/signup", { username, password })
    };
  };
export function getPic(pic) {
    return {
      type: GET_PIC,
      payload: pic
    }
  }



export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_USERNAME:
    // console.log(action.payload)
      return {
        ...state,
        username: action.payload
      };
    case UPDATE_PASSWORD:
      return {
        ...state,
        password: action.payload
      };
    case LOGIN: 
      return {
        ...state,
      user: action.payload.data
      };
    case REGISTER: 
      return {
        ...state,
      user: action.payload.data
      };
    case GET_PIC: 
      return {
        ...state,
        user: action.payload.data
      };
    default: 
      return state
  }
}