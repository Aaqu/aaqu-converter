import { createSlice, configureStore } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export interface FileInfo {
  name: string;
  path: string;
  size: number;
  id?: string;
}

export interface ConverterState {
  files: FileInfo[];
}

const initialState: ConverterState = {
  files: [],
};

interface AddFile {
  payload: FileInfo;
}

const converterSlice = createSlice({
  name: 'converter',
  initialState,
  reducers: {
    addFile(state, action: AddFile) {
      state.files.push({
        id: uuidv4(),
        ...action.payload,
      });
    },
    removeFile(state, action: { payload: number }) {
      state.files = state.files.filter((file) => file.id !== action.payload);
    },
  },
});

export const { addFile, removeFile } = converterSlice.actions;

export const store = configureStore({
  reducer: converterSlice.reducer,
});
