import { createSlice } from '@reduxjs/toolkit';

import { insertTask, updateTaskStatus, deleteTaskById } from '../../db';

const initialState = {
  task: '',
  tasks: [],
  isModalVisible: false,
  selectedTask: {}
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTask: (state, action) => {
      state.task = action.payload;
    },
    addTask: (state, action) => {
      const newTask = {
        isCheck: 0,
        value: state.task
      };
      insertTask(newTask)
        .then(() => {
          console.log('Task inserted into database.');
        })
        .catch((error) => {
          console.log('Failed to insert task:', error);
        });

      state.task = '';
    },
    toggleCheckTask: (state, action) => {
      const taskId = action.payload;
      const task = state.tasks.find((task) => task.id === taskId);
      if (task) {
        task.isCheck = !task.isCheck;
        updateTaskStatus(taskId, task.isCheck);
      }
    },
    deleteTask: (state, action) => {
      const taskId = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
      deleteTaskById(taskId);
      state.isModalVisible = false;
      state.selectedTask = {};
    },
    setModalVisible: (state, action) => {
      state.isModalVisible = action.payload;
    },
    setSelectedTask: (state, action) => {
      state.selectedTask = action.payload;
    },
    setTasks: (state, action) => {
      state.tasks = action.payload;
    }
  }
});

export const {
  setTask,
  addTask,
  toggleCheckTask,
  deleteTask,
  setModalVisible,
  setSelectedTask,
  updateTask,
  setTasks
} = tasksSlice.actions;

export default tasksSlice.reducer;
