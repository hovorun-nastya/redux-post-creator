import {createSlice} from "@reduxjs/toolkit";

const initialState =[
    {id: '0', name: 'Anastasia Hovorun'},
    {id:'1', name:'Kupach Ivan'},
    {id:'2', name:'Cristian Gray'}
]

const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers:{}
})

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer