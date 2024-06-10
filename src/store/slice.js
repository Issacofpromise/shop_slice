import { createSlice } from '@reduxjs/toolkit';
let yu = createSlice({name : 'MyL',
    initialState : {name : 'White', count : 2},
reducers : { chan(state, action){state.name = 'Choi';state.count +=action.payload}}})
export let {chan} = yu.actions
let st = createSlice({name : 'Grey',
    initialState : [  {id : 0, name : 'White and Black', count : 0},
    {id : 9, name : 'jackl', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}],
reducers : { incr(state, action) {state[action.payload].count++},
order(state, action) { let id=action.payload.id; state.map(a => { if(a.id== id){
    let num=state.findIndex(a=>a.id==id);state[num].count++}});
    if (!state.some(a => a.id === id)) {   state.push(action.payload)   }},  
sub(state, action) { state.splice(action.payload, 1) }, 
sort(state){state.sort((a, b) =>  b.count - a.count)}}})
  export let {incr,order,sort,sub} = st.actions
  export {yu,st}