import { server } from "../store";
import axios  from "axios";


export const createCourse = (formdata) => async dispatch => {
    const config = {
        headers:{
            "Content-Type":"multipart/form-data",
        },
        withCredentials : true,
    }
    try {
        dispatch({type:"createCourseRequest"});
        const {data} = await axios.post(`${server}/createcourse`,formdata,config);
        dispatch({type:"createCourseSuccess", payload:data});

    } catch (error) {
        dispatch({type:"createCourseFail", payload:error.response.data.message});
        
    }
}




export const deleteCourse = (id) => async dispatch => {
    const config = {
        withCredentials : true,
    }
    try {
        dispatch({type:"deleteCourseRequest"});
        const {data} = await axios.delete(`${server}/course/${id}`,config);
        dispatch({type:"deleteCourseSuccess", payload:data.message});

    } catch (error) {
        dispatch({type:"deleteCourseFail", payload:error.response.data.message});
        
    }
}

export const addLecture = (id,formdata) => async dispatch => {
    const config = {
        headers:{
            "Content-Type":"multipart/form-data",
        },
        withCredentials : true,
    }
    try {
        dispatch({type:"addlectureRequest"});
        const {data} = await axios.post(`${server}/course/${id}`,formdata,config);
        dispatch({type:"addLectureSuccess", payload:data.message});

    } catch (error) {
        dispatch({type:"addLectureFail", payload:error.response.data.message});
        
    }
}


export const deleteLecture = (courseId , lectureId) => async dispatch => {
    const config = {
        withCredentials : true,
    }
    try {
        dispatch({type:"deletelectureRequest"});
        const {data} = await axios.delete(`${server}/lecture?courseId=${courseId}&lectureId=${lectureId}`
        ,config);
        dispatch({type:"deleteLectureSuccess", payload:data.message});

    } catch (error) {
        dispatch({type:"deleteLectureFail", payload:error.response.data.message});
        
    }
}

export const getAllUsers = () => async dispatch => {
    const config = {
        withCredentials : true,
    }
    try {
        dispatch({type:"getAllUsersRequest"});
        const {data} = await axios.get(`${server}/admin/users`
        ,config);
        dispatch({type:"getAllUsersSuccess", payload:data.users});

    } catch (error) {
        dispatch({type:"getAllUsersFail", payload:error.response.data.message});
        
    }
}

export const updateUserRole = (id) => async dispatch => {
    const config = {
        withCredentials : true,
    }
    try {
        dispatch({type:"updateUserRoleRequest"});
        const {data} = await axios.put(`${server}/admin/users/${id}`,{}
        ,config);
        dispatch({type:"updateUserRoleSuccess", payload:data.message});

    } catch (error) {
        dispatch({type:"updateUserRoleFail", payload:error.response.data.message});
        
    }
}

export const deleteUser = (id) => async dispatch => {
    const config = {
        withCredentials : true,
    }
    try {
        dispatch({type:"deleteUserRequest"});
        const {data} = await axios.delete(`${server}/admin/users/${id}`
        ,config);
        dispatch({type:"deleteUserSuccess", payload:data.message});

    } catch (error) {
        dispatch({type:"deleteUserFail", payload:error.response.data.message});
        
    }
}


export const getDashboardStats = () => async dispatch => {
    const config = {
        withCredentials : true,
    }
    try {
        dispatch({type:"getAdminStatsRequest"});
        const {data} = await axios.get(`${server}/admin/stats`
        ,config);
        dispatch({type:"getAdminStatsSuccess", payload:data});

    } catch (error) {
        dispatch({type:"getAdminStatsFail", payload:error.response.data.message});
        
    }
}