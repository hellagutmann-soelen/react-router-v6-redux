import { configureStore, } from '@reduxjs/toolkit'
import type { TypedStartListening, TypedAddListener } from '@reduxjs/toolkit'
import rootReducer from "./reducer";
// import navigation from './middlewares/navigation';
import { createRouterMiddleware, ReduxRouterState} from '@lagunovsky/redux-react-router'
import { browserHistory } from '../navigation/history';

const routerMiddleware = createRouterMiddleware( browserHistory )

export const store = configureStore({
  reducer: rootReducer,
  middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().prepend(
    routerMiddleware,
  )
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export type AppStartListening = TypedStartListening<RootState, AppDispatch>

export default store;
