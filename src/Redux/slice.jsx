import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlicer =  createSlice({
    name : "task",
    initialState : {
        tasks : [],
        filter : "all"
    },
    reducers : {
        addTask : {
            reducer : (state, action)=> {
                state.tasks.push(action.payload)
            },
            prepare : (text) =>{
                return {
                    payload : {
                        id : nanoid(),
                        title : text,
                        description : text,
                        completed : false,
                        priority : "medium",
                        reminder : false,
                        date : new Date().toISOString().split("T")[0]
                    }
                }
            }
        },
        editTask : (state, action) => {
            const { id, title } = action.payload;
            const task = state.tasks.find(t => t.id === id);
             if (task) {
            task.title = title;
            task.description = title;
            }
        },
        deleteTask : (state, action) => {
         state.tasks = state.tasks.filter(t => t.id !== action.payload);
        },
        toggleTask : (state, action) => {
            const task = state.tasks.find(t => t.id === action.payload);
            if(task){
                task.completed = !task.completed;
            }
        },
        filterTask : (state, action) => {
            state.filter = action.payload;
        },
    }
})

export const {addTask, deleteTask, editTask, toggleTask, filterTask} = todoSlicer.actions;
export default todoSlicer.reducer;