import { configureStore } from '@reduxjs/toolkit';
import { homeReducer } from '@/features/home/store/reducer';
import { headerReducer } from '@/features/header/store/reducer';
import { sliderReducer } from '@/features/slider/store/reducer';

export const store = configureStore({
  reducer: {
    home: homeReducer,
    header: headerReducer,
    slider: sliderReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
