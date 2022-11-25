import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PublicRoute } from './PublicRoute';
import { Header } from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from 'redux/selector';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'redux/phonebook/auth/auth-operations';

const Home = lazy(() => import('../pages/Home'));
const ContactPage = lazy(() => import('../pages/Contacts'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));


export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(getToken);

  useEffect(() => {
    if (token) {
      dispatch(fetchCurrentUser());
    }
    return;
  }, [dispatch, token]);

  return (
    <>
      <Header />
      <main>
        <Suspense>
          <Routes>
            <Route path='/' element={<Home />} />
            
            <Route path='/' element={<PrivateRoute />}>
              <Route path='/contacts' element={<ContactPage />} />
            </Route>

            <Route path='/' element={<PublicRoute/>}>
              <Route path='/registration' element={<Register />} />
              <Route path='/login' element={<Login />} />
            </Route>
            </Routes>
        </Suspense>
      </main>
        <ToastContainer
            autoClose={2000}
            position="top-right"
            hideProgressBar={true}
      />
    </>
  );
};
