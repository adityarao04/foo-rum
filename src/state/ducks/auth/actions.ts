
import { logoutUser as dexieLogout} from 'Storage/dexie';
import { authenticateUser, populateUserData} from 'Storage/dexie';



// Auth action types
export const AUTH_ACTIONS = {
  LOGIN_REQUEST: 'AUTH/LOGIN_REQUEST',
  LOGIN_SUCCESS: 'AUTH/LOGIN_SUCCESS',
  LOGIN_FAILURE: 'AUTH/LOGIN_FAILURE',
  SIGNUP_REQUEST: 'AUTH/SIGNUP_REQUEST',
  SIGNUP_SUCCESS: 'AUTH/SIGNUP_SUCCESS',
  SIGNUP_FAILURE: 'AUTH/SIGNUP_FAILURE',
  LOGOUT: 'AUTH/LOGOUT',
  CLEAR_ERROR: 'AUTH/CLEAR_ERROR',
  RESET_AUTH_STATE:'RESET_AUTH_STATE'
} as const;

// Action creators
export const loginRequest = () => ({
  type: AUTH_ACTIONS.LOGIN_REQUEST,
});

export const loginSuccess = (user: any) => ({
  type: AUTH_ACTIONS.LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error: string) => ({
  type: AUTH_ACTIONS.LOGIN_FAILURE,
  payload: error,
});

export const signupRequest = () => ({
  type: AUTH_ACTIONS.SIGNUP_REQUEST,
});

export const signupSuccess = (user: any) => ({
  type: AUTH_ACTIONS.SIGNUP_SUCCESS,
  payload: user,
});

export const signupFailure = (error: string) => ({
  type: AUTH_ACTIONS.SIGNUP_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: AUTH_ACTIONS.LOGOUT,
});

export const clearError = () => ({
  type: AUTH_ACTIONS.CLEAR_ERROR,
});

export const resetAuthState = () => ({
    type: AUTH_ACTIONS.RESET_AUTH_STATE,
  });

// Thunk actions
export const loginUser = (email: string, password: string, rememberMe: boolean = false) => {
  return async (dispatch: any) => {
    try {
      dispatch(loginRequest());
      
      
      const result = await authenticateUser(email, password, rememberMe);
      console.log("result", result);
      if (result.success) {
        dispatch(loginSuccess(result.user));
        return { success: true, user: result.user };
      } else {
        dispatch(loginFailure('Login failed'));
        return { success: false, error: 'Login failed' };
      }
    } catch (error: any) {
      dispatch(loginFailure(error.message || 'Login failed'));
      return { success: false, error: error.message || 'Login failed' };
    }
  };
};

export const signupUser = (email: string, password: string, name: string) => {
  return async (dispatch: any) => {
    try {
      dispatch(signupRequest());
    
      
      const result = await populateUserData(email, password, name);
      
      if (result.success) {
        dispatch(signupSuccess(result.user));
        return { success: true, user: result.user };
      } else {
        dispatch(signupFailure('Signup failed'));
        return { success: false, error: 'Signup failed' };
      }
    } catch (error: any) {
      dispatch(signupFailure(error.message || 'Signup failed'));
      return { success: false, error: error.message || 'Signup failed' };
    }
  };
};

export const logoutUser = () => {
  return async (dispatch: any) => {
    try {
      // Import the logout function
      
      await dexieLogout();
      dispatch(logout());
      
      return { success: true };
    } catch (error: any) {
      console.error('Logout error:', error);
      dispatch(logout()); // Still logout even if there's an error
      return { success: true };
    }
  };
};
