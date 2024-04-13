import { server } from "../store";
import axios  from "axios";

export const getAllCourses = (category="",keyword="") => async dispatch => {
    try {
        dispatch({type:"allCourseRequest"});
        const {data} = await axios.get(`${server}/courses?keyword=${keyword}&category=${category}`);
        dispatch({type:"allCourseSuccess", payload:data.courses});

    } catch (error) {
        dispatch({type:"allCourseFail", payload:error.response.data.message});
        
    }
}

export const getCourselectures = id => async dispatch => {
    try {
        dispatch({type:"getCourseRequest"});
        const {data} = await axios.get(`${server}/course/${id}`,{
            withCredentials:true
        });
        dispatch({type:"getCourseSuccess", payload:data});

    } catch (error) {
        dispatch({type:"getCourseFail", payload:error.response.data.message});
        
    }
}

