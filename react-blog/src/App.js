
import { ToastContainer } from 'react-toastify';
import './App.css';
import AppRouter from './approuter/AppRouter';
import AuthContextProvider from './contexts/AuthContext';
import BlogContextProvider from './contexts/BlogContext';

function App() {
  return (
    <div className="App">

   <AuthContextProvider>
     <BlogContextProvider>
        <AppRouter/>
        <ToastContainer/>
    </BlogContextProvider>
   </AuthContextProvider>


    </div>
  );
}

export default App;
