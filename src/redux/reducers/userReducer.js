import { createAction, createReducer } from '@reduxjs/toolkit'

// User Reducer

const loginRequest = createAction('loginRequest')
const loginSuccess = createAction('loginSuccess')
const loginFail = createAction('loginFail')
const registerRequest = createAction('registerRequest')
const registerSuccess = createAction('registerSuccess')
const registerFail = createAction('registerFail')
const logoutRequest = createAction('logoutRequest')
const logoutSuccess = createAction('logoutSuccess')
const logoutFail = createAction('logoutFail')
const loadUserRequest = createAction('loadUserRequest')
const loadUserSuccess = createAction('loadUserSuccess')
const loadUserFail = createAction('loadUserFail')
const clearError = createAction('clearError')
const clearMessage = createAction('clearMessage')


export const userReducer = createReducer(
  {
    counter: 0,
    sumOfNumberPayloads: 0,
    unhandledActions: 0,
  },
  (builder) => {
    builder
      .addCase(loginRequest, (state) => {
        
        state.loading = true;
      })
      
      .addCase(loginSuccess, (state, action) => {
        state.loading=false;
        state.isAuthenticated=true;
        state.user= action.payload.user;
        state.message = action.payload.message;
      })
      
      .addCase(loginFail, (state, action) => {
        state.loading=false;
        state.isAuthenticated=false;
        state.error = action.payload;
      })
      .addCase(registerRequest, (state) => {
        
        state.loading = true;
      })
      
      .addCase(registerSuccess, (state, action) => {
        state.loading=false;
        state.isAuthenticated=true;
        state.user= action.payload.user;
        state.message = action.payload.message;
      })
      
      .addCase(registerFail, (state, action) => {
        state.loading=false;
        state.isAuthenticated=false;
        state.error = action.payload;
      })
      .addCase(logoutRequest, (state) => {
        
        state.loading = true;
      })
      .addCase(logoutSuccess, (state, action) => {
        state.loading=false;
        state.isAuthenticated=false;
        state.user= null;
        state.message = action.payload;
      })
      
      .addCase(logoutFail, (state, action) => {
        state.loading=false;
        state.isAuthenticated=true;
        state.error = action.payload;
      })
      .addCase(loadUserRequest, (state) => {
        
        state.loading = true;
      })
      
      .addCase(loadUserSuccess, (state, action) => {
        state.loading=false;
        state.isAuthenticated=true;
        state.user= action.payload;
      })
      
      .addCase(loadUserFail, (state, action) => {
        state.loading=false;
        state.isAuthenticated=false;
        state.error = action.payload;
      })
      // and provide a default case if no other handlers matched
      .addCase(clearError,(state) => {
        state.error = null;
      })
      .addCase(clearMessage,(state)=>{
        state.message = null;
      })
  }
)

// Update Reducer
const updateProfileRequest = createAction('updateProfileRequest')
const updateProfileSuccess = createAction('updateProfileSuccess')
const updateProfileFail = createAction('updateProfileFail')
const changePasswordRequest = createAction('changePasswordRequest')
const changePasswordSuccess = createAction('changePasswordSuccess')
const changePasswordFail = createAction('changePasswordFail')
const forgetPasswordRequest = createAction('forgetPasswordRequest')
const forgetPasswordSuccess = createAction('forgetPasswordSuccess')
const forgetPasswordFail = createAction('forgetPasswordFail')

const resetPasswordRequest = createAction('resetPasswordRequest')
const resetPasswordSuccess = createAction('resetPasswordSuccess')
const resetPasswordFail = createAction('resetPasswordFail')

const updateProfilePictureRequest = createAction('updateProfilePictureRequest')
const updateProfilePictureSuccess = createAction('updateProfilePictureSuccess')
const updateProfilePictureFail = createAction('updateProfilePictureFail')

const removeFromPlaylistRequest = createAction('removeFromPlaylistRequest')
const removeFromPlaylistSuccess = createAction('removeFromPlaylistSuccess')
const removeFromPlaylistFail = createAction('removeFromPlaylistFail')

export const profileReducer = createReducer(

    {},
    (builder) => {
      builder
        .addCase(updateProfileRequest, (state) => {
          state.loading = true;
        })
        .addCase(updateProfileSuccess, (state,action) => {
            state.loading = true;
            state.message = action.payload;
        })
        .addCase(updateProfileFail, (state,action) => {
            state.loading = true;
            state.error = action.payload
        })
        .addCase(changePasswordRequest, (state) => {
            state.loading = true;
        })
        .addCase(changePasswordSuccess, (state,action) => {
              state.loading = true;
              state.message = action.payload;
        })
        .addCase(changePasswordFail, (state,action) => {
              state.loading = true;
              state.error = action.payload
        })
        .addCase(forgetPasswordRequest, (state) => {
            state.loading = true;
        })
        .addCase(forgetPasswordSuccess, (state,action) => {
              state.loading = true;
              state.message = action.payload;
        })
        .addCase(forgetPasswordFail, (state,action) => {
              state.loading = true;
              state.error = action.payload
        })
        .addCase(resetPasswordRequest, (state) => {
            state.loading = true;
        })
        .addCase(resetPasswordSuccess, (state,action) => {
              state.loading = true;
              state.message = action.payload;
        })
        .addCase(resetPasswordFail, (state,action) => {
              state.loading = true;
              state.error = action.payload
        })
        .addCase(updateProfilePictureRequest, (state) => {
            state.loading = true;
        })
        .addCase(updateProfilePictureSuccess, (state,action) => {
              state.loading = true;
              state.message = action.payload;
        })
        .addCase(updateProfilePictureFail, (state,action) => {
              state.loading = true;
              state.error = action.payload
        })
        .addCase(removeFromPlaylistRequest, (state) => {
          state.loading = true;
        })
        .addCase(removeFromPlaylistSuccess, (state,action) => {
            state.loading = false;
            state.courses = action.payload;
        })
        .addCase(removeFromPlaylistFail, (state,action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(clearError,(state) => {
            state.error = null;
        })
        .addCase(clearMessage,(state)=>{
            state.message = null;
        })
            
    }
)



const buySubscriptionRequest = createAction('buySubscriptionRequest')
const buySubscriptionSuccess = createAction('buySubscriptionSuccess')
const buySubscriptionFail = createAction('buySubscriptionFail')

const cancelSubscriptionRequest = createAction('cancelSubscriptionRequest')
const cancelSubscriptionSuccess = createAction('cancelSubscriptionSuccess')
const cancelSubscriptionFail = createAction('cancelSubscriptionFail')


export const subscriptionReducer = createReducer(
  {
    counter: 0,
    sumOfNumberPayloads: 0,
    unhandledActions: 0,
  },
  (builder) => {
    builder
      .addCase(buySubscriptionRequest, (state) => {
        state.loading = true;
      })
      .addCase(buySubscriptionSuccess, (state, action) => {
        state.loading=false;
        state.subscriptionId= action.payload;
      })    
      .addCase(buySubscriptionFail, (state, action) => {
        state.loading=false;
        state.error = action.payload;
      })
      .addCase(cancelSubscriptionRequest, (state) => {
        state.loading = true;
      })
      .addCase(cancelSubscriptionSuccess, (state, action) => {
        state.loading=false;
        state.message= action.payload;
      })    
      .addCase(cancelSubscriptionFail, (state, action) => {
        state.loading=false;
        state.error = action.payload;
      })
      .addCase(clearError,(state) => {
        state.error = null;
      })
      .addCase(clearMessage,(state)=>{
        state.message = null;
      })
    }
  )