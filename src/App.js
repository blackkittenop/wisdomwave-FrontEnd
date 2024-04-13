import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/layout/Header";
import Courses from './components/Courses/Courses';
import Footer from './components/layout/Footer';
import Login from './auth/Login';
import Register from './auth/Register';
import ForgetPassword from './auth/ForgetPassword';
import ResetPassword from './auth/ResetPassword';
import ContactUs from './components/ContactUs/ContactUs';
import Request from './components/Request/Request';
import About from './components/About/About';
import Suscribe from './components/Payments/Suscribe';
import NotFound from './components/layout/NotFound/NotFound';
import PaymentSucess from './components/Payments/PaymentSucess';
import PaymentFail from './components/Payments/PaymentFail';
import CoursePage from './components/CoursePage/CoursePage';
import Profile from './components/Profile/Profile';
import ChangePassword from './components/Profile/ChangePassword';
import UpdateProfile from './components/Profile/UpdateProfile';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import AdminCourses from './components/Admin/AdminCourses/AdminCourses';
import Users from './components/Admin/Users/Users';
import CreateCourses from './components/Admin/CreateCourses/CreateCourses';
import {useDispatch , useSelector} from "react-redux";
import toast,{Toaster} from "react-hot-toast"
import { loadUser } from './redux/action/user';
import {ProtectedRoute} from "protected-route-react";
import Loader from './components/layout/Loader/Loader';
import CourseTest from './components/Courses/CourseTest';

function App() {

  window.addEventListener("contextmenu", e => {
    e.preventDefault();
  });

  const {isAuthenticated , user,error,message, loading} = useSelector(state => state.user);

  const dispatch = useDispatch();

  useEffect(()=>{
    if(error){
      toast.error(error);
      dispatch({type:"clearError"});
    }

    if(message){
      toast.success(message);
      dispatch({type:"clearMessage"});
    }
  },[dispatch,error,message]);


  useEffect(()=>{
    dispatch(loadUser());
  },[dispatch]);


  return (  
    <Router>
    {
      loading ? (<Loader/>) : (
    <>  
        <Header isAuthenticated={isAuthenticated} user={user}/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/courses' element={<Courses/>} />
      <Route path='/course/:id' element={
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <CoursePage user={user}/>
        </ProtectedRoute>
      } />
      <Route path='/contactus' element={<ContactUs/>} />
      <Route path='/request' element={<Request/>} />
      <Route path='/login' element={
        <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile">
            <Login/>
        </ProtectedRoute>
      } />
      <Route path='/profile' element={
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Profile user={user}/>
        </ProtectedRoute>
      } />
      <Route path='/about' element={<About/>} />
      <Route path='/signup' element={
        <ProtectedRoute isAuthenticated = {!isAuthenticated} redirect="/profile">
          <Register/>
        </ProtectedRoute>
      } />
      <Route path='/forgetpassword' element={
        <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile">
          <ForgetPassword/>
        </ProtectedRoute>
      }/>
      <Route path='/resetpassword/:id' element={
        <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile">
          <ResetPassword/>
        </ProtectedRoute>
      } />
      <Route path='/changepassword' element={
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <ChangePassword/>
        </ProtectedRoute>
      } />
      <Route path='/updateprofile' element={
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <UpdateProfile user={user}/>
        </ProtectedRoute>
      } /> 
      <Route path='/subscribe' element={
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suscribe user={user}/>
        </ProtectedRoute>
      } />
      <Route path='*' element={<NotFound/>} />
      <Route path='/paymentsuccess' element={<PaymentSucess/>} />
      <Route path='/paymentfail' element={<PaymentFail/>} />

      {/* Admin Dashboard */}
      <Route path='/admin/dashboard' element={
        <ProtectedRoute 
        isAuthenticated={isAuthenticated}
        adminRoute={true}
        isAdmin={user && user.role === 'admin'}>
          <Dashboard/>
        </ProtectedRoute>
      } />
      <Route path='/admin/createcourse' element={<ProtectedRoute 
        isAuthenticated={isAuthenticated}
        adminRoute={true}
        isAdmin={user && user.role === 'admin'}>
          <CreateCourses/>
        </ProtectedRoute>} />
      <Route path='/admin/admincourses' element={<ProtectedRoute 
        isAuthenticated={isAuthenticated}
        adminRoute={true}
        isAdmin={user && user.role === 'admin'}>
          <AdminCourses/>
        </ProtectedRoute>} />
      <Route path='/admin/users' element={<ProtectedRoute 
        isAuthenticated={isAuthenticated}
        adminRoute={true}
        isAdmin={user && user.role === 'admin'}>
          <Users/>
        </ProtectedRoute>} />

      </Routes>
    <Footer/>
    <Toaster/>
</>
      )
    }
    </Router>
  );
}

export default App;
