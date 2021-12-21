import {configureStore} from "@reduxjs/toolkit";
import counterReducer from './reducers/counter';

/*export default configureStore({*/
export const store = configureStore({
    reducer: {
        menu: counterReducer
    }
})
