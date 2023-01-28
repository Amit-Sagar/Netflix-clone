import { Routes, Route } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Account from './pages/Account'
import ProtectedRoute from './components/ProtectedRoute'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
      <AuthContextProvider>
      <div><Toaster/></div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/account" element={<ProtectedRoute><Account/></ProtectedRoute>} />
        </Routes>
      </AuthContextProvider>
    </>
  )
}

export default App
