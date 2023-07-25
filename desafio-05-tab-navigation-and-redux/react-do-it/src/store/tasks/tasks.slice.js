import { createSlice } from '@reduxjs/toolkit';

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
      state.tasks.push({
        id: Date.now().toString(),
        check: false,
        value: state.task
      });
      state.task = '';
    },
    toggleCheckTask: (state, action) => {
      const taskId = action.payload;
      const task = state.tasks.find((task) => task.id === taskId);
      if (task) {
        task.check = !task.check;
      }
    },
    deleteTask: (state, action) => {
      const taskId = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
      state.isModalVisible = false;
      state.selectedTask = {};
    },
    setModalVisible: (state, action) => {
      state.isModalVisible = action.payload;
    },
    setSelectedTask: (state, action) => {
      state.selectedTask = action.payload;
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
  updateTask
} = tasksSlice.actions;

export default tasksSlice.reducer;
