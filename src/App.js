import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Stack } from '@mui/material';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Navbar from './pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Signup from './pages/Login/Signup';
import RequireAuth from './pages/Login/RequireAuth';
import Blogs from './pages/Home/Blogs';
import Archive from './pages/Home/Archive';
import Trash from './pages/Home/Trash';
import Profile from './pages/Shared/Profile';
import MyAccount from './pages/Shared/MyAccount';
import HomePage from "./pages/HomePage/HomePage";
import NotFound from "./pages/Shared/NotFound";

function App() {
  return (
    <Box>
      <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<RequireAuth><Home /></RequireAuth>} />
          <Route path='/blogs' element={<RequireAuth><Blogs /></RequireAuth>} />
          <Route path='/archive' element={<RequireAuth><Archive /></RequireAuth>} />
          <Route path='/trash' element={<RequireAuth><Trash /></RequireAuth>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/profile' element={<RequireAuth><Profile /></RequireAuth>} />
          <Route path='/myAccount' element={<RequireAuth><MyAccount /></RequireAuth>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      <ToastContainer />
    </Box>
  );
}

export default App;
