import { Routes ,Route } from 'react-router-dom';
import LoginPage  from './freatures/auth/pages/LoginPage';
import MainPage  from './components/Layout/MainPage';
import PrivateRoute from './components/Common/PrivateRoute';
import  NotFound  from './components/Common/NotFound';
import Locations from './freatures/locations/Locations';
import Users from './freatures/users/Users';
import ResetPassword from './freatures/auth/pages/ResetPassword';
import ForgotPassword from './freatures/auth/pages/ForgotPassword';
import Register from './freatures/auth/pages/Register';
function App() {
  
  return (
    <div>
    
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/resetpassword' element={<ResetPassword/>}/>
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>
        <Route path='/register' element={<Register/>}/>
            
       
        <Route path='/' element={<PrivateRoute><MainPage/></PrivateRoute>}>
          
        </Route>
        <Route path='/locations' element={<PrivateRoute><Locations/></PrivateRoute>}>
          
        </Route>
        <Route path='/users' element={<PrivateRoute><Users/></PrivateRoute>}>
          
        </Route>
       
        <Route path='*' element={<NotFound/>}>
            
        </Route>
      </Routes>
    </div>
  );
}

export default App;
