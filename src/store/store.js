import { configureStore} from '@reduxjs/toolkit';
import {yu,st} from './slice';

export default configureStore({
  reducer: {
    ge:yu.reducer,
    ri:st.reducer
   }
}) 