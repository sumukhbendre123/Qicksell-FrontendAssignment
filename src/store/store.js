import { configureStore } from '@reduxjs/toolkit';
import { DataReducer, SelectDataReducer } from './dataReducer';

const store = configureStore({
    reducer: {
        data: DataReducer,
        selectedData: SelectDataReducer,
    },
});

export default store;
