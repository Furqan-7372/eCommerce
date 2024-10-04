import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState} from '../../Interfaces/index';

const initialState: AuthState = {
    accessToken: null,
  };
  
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<string>) {
            if (!state.accessToken) {
                state.accessToken = action.payload
            }
        },
        logout(state) {
            state.accessToken = null
        }
    }
  })


export const {
    login,
    logout,
} = authSlice.actions

export default authSlice.reducer