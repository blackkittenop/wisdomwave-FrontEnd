import { createAction, createReducer } from '@reduxjs/toolkit'

// Admin Reducer

const createCourseRequest = createAction('createCourseRequest')
const createCourseSuccess = createAction('createCourseSuccess')
const createCourseFail = createAction('createCourseFail')

const getAllUsersRequest = createAction('getAllUsersRequest')
const getAllUsersSuccess = createAction('getAllUsersSuccess')
const getAllUsersFail = createAction('getAllUsersFail')

const deleteUserRequest = createAction('deleteUserRequest')
const deleteUserSuccess = createAction('deleteUserSuccess')
const deleteUserFail = createAction('deleteUserFail')

const updateUserRoleRequest = createAction('updateUserRoleRequest')
const updateUserRoleSuccess = createAction('updateUserRoleSuccess')
const updateUserRoleFail = createAction('updateUserRoleFail')

const deleteCourseRequest = createAction('deleteCourseRequest')
const deleteCourseSuccess = createAction('deleteCourseSuccess')
const deleteCourseFail = createAction('deleteCourseFail')

const addLectureRequest = createAction('addLectureRequest')
const addLectureSuccess = createAction('addLectureSuccess')
const addLectureFail = createAction('addLectureFail')

const deleteLectureRequest = createAction('deleteLectureRequest')
const deleteLectureSuccess = createAction('deleteLectureSuccess')
const deleteLectureFail = createAction('deleteLectureFail')

const clearError = createAction('clearError')
const clearMessage = createAction('clearMessage')


export const adminReducer = createReducer(
    { },
    (builder) => {
      builder
        .addCase(getAllUsersRequest, (state) => {
          state.loading = true;
        })
        .addCase(getAllUsersSuccess, (state,action) => {
            state.loading = false;
            state.users = action.payload;
        })
        .addCase(getAllUsersFail, (state,action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(deleteUserRequest, (state) => {
          state.loading = true;
        })
        .addCase(deleteUserSuccess, (state,action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase(deleteUserFail, (state,action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(updateUserRoleRequest, (state) => {
          state.loading = true;
        })
        .addCase(updateUserRoleSuccess, (state,action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase(updateUserRoleFail, (state,action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(createCourseRequest, (state) => {
          state.loading = true;
        })
        .addCase(createCourseSuccess, (state,action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase(createCourseFail, (state,action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(deleteCourseRequest, (state) => {
          state.loading = true;
        })
        .addCase(deleteCourseSuccess, (state,action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase(deleteCourseFail, (state,action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(addLectureRequest, (state) => {
          state.loading = true;
        })
        .addCase(addLectureSuccess, (state,action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase(addLectureFail, (state,action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(deleteLectureRequest, (state) => {
          state.loading = true;
        })
        .addCase(deleteLectureSuccess, (state,action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase(deleteLectureFail, (state,action) => {
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