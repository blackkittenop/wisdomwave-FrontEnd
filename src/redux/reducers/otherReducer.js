import { createAction, createReducer } from '@reduxjs/toolkit'

// Other Reducer
const contactRequest = createAction('contactRequest')
const contactSuccess = createAction('contactSuccess')
const contactFail = createAction('contactFail')

const courseRequest = createAction('courseRequest')
const courseSuccess = createAction('courseSuccess')
const courseFail = createAction('courseFail')

const clearError = createAction('clearError')
const clearMessage = createAction('clearMessage')



export const otherReducer = createReducer(
    { },
    (builder) => {
      builder
        .addCase(contactRequest, (state) => {
          state.loading = true;
        })
        .addCase(contactSuccess, (state,action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase(contactFail, (state,action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(courseRequest, (state) => {
            state.loading = true;
        })
        .addCase(courseSuccess, (state,action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase(courseFail, (state,action) => {
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