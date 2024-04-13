import { createAction, createReducer } from '@reduxjs/toolkit'

// Course Reducer

const allCourseRequest = createAction('allCourseRequest')
const allCourseSuccess = createAction('allCourseSuccess')
const allCourseFail = createAction('allCourseFail')

const getCourseRequest = createAction('getCourseRequest')
const getCourseSuccess = createAction('getCourseSuccess')
const getCourseFail = createAction('getCourseFail')

const addToPlaylistRequest = createAction('addToPlaylistRequest')
const addToPlaylistSuccess = createAction('addToPlaylistSuccess')
const addToPlaylistFail = createAction('addToPlaylistFail')

const clearError = createAction('clearError')
const clearMessage = createAction('clearMessage')

export const courseReducer = createReducer(
    {
      courses:[],lectures:[]
    },
    (builder) => {
      builder
        .addCase(allCourseRequest, (state) => {
          state.loading = true;
        })
        .addCase(allCourseSuccess, (state,action) => {
            state.loading = false;
            state.courses = action.payload;
        })
        .addCase(allCourseFail, (state,action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(getCourseRequest, (state) => {
          state.loading = true;
        })
        .addCase(getCourseSuccess, (state,action) => {
            state.loading = false;
            state.lectures = action.payload;
        })
        .addCase(getCourseFail, (state,action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(addToPlaylistRequest, (state) => {
          state.loading = true;
        })
        .addCase(addToPlaylistSuccess, (state,action) => {
            state.loading = false;
            state.courses = action.payload;
        })
        .addCase(addToPlaylistFail, (state,action) => {
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