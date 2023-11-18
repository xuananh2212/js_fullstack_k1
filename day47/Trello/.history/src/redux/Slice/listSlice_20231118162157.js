import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
     todoList: [
          "item1", "item2"
     ],
     status: 'idle'
}
export const todoSlice = createSlice({
     name: 'todo',
     initialState,
     reducers: {
          update: (state, action) => {
               state.todoList = action.payload;
          }
     },
     extraReducers: (builder) => {
          builder
               .addCase(fetchTodos.pending, (state) => {
                    state.status = 'pending';
               })
               .addCase(fetchTodos.fulfilled, (state, action) => {
                    state.todoList = action.payload;
                    state.status = 'success';
               })
               .addCase(fetchTodos.rejected, (state) => {
                    state.status = 'error'
               })
     }
});
console.log(todoSlice, 'slice');

// export const fetchTodos = () => {
//      return async (dispatch) => {
//           const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//           const data = await response.json();
//           console.log(data);
//           dispatch(todoSlice.actions.update(data));


//      }
// }

export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
     const data = await response.json();
     return data;
})
// createAsyncThunk State
// - pedding
// - fulfilled
// - reject
