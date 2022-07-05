import { createAsyncThunk, createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit'

export interface NameAttributes {
  family_name: string,
  given_name: string,
}

export type Loading = 'idle' | 'pending' | 'succeeded' | 'failed';
export type Authentication = 'pending' | 'succeeded' | 'failed';

export interface AppState {
  loading: Loading,
  authentication: Authentication,
  currentRequestId: string,
  error: SerializedError | null,
  redirect: string,
}

const initialState: AppState = {
  loading: 'idle',
  authentication: 'pending',
  currentRequestId: '',
  error: null,
  redirect: '',
}

interface CurrentUserOpts {
  bypassCache?: boolean,
}

interface CognitoSession {
  accessToken: {
    jwtToken: string,
  },
  idToken: {
    jwtToken: string,
  },
  refreshToken: {
    token: string,
  }
}


export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    userRedirected: (state, action: PayloadAction<string>) => {
      state.redirect = action.payload;
    },
  },
  extraReducers: ( builder ) => {
  },
})

// Action creators are generated for each case reducer function
export const {
  userRedirected,
} = appSlice.actions

export default appSlice.reducer
