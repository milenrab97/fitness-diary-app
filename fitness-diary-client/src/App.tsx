import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SetupWorkout from './pages/SetupWorkout/SetupWorkout';
import Header from './components/Header';
import LogWorkout from './pages/LogWorkout/LogWorkout';
import Login from './pages/Login/Login';
import { ProtectedRoute } from './components/ProtectedRoute';
import { AuthProvider, useAuth } from './Auth';
import Register from './pages/Register/Register';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//   },
//   {
//     path: '/setup-workout',
//     element: <SetupWorkout />,
//   },
// ]);

function App() {
  return (
    <div className="max-h-screen pb-[150px] overflow-y-auto flex flex-col">
      <AuthProvider>
        <_App />
      </AuthProvider>
    </div>
  );
}

function _App() {
  const isLoggedIn = useAuth().authenticated;

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <ProtectedRoute isAllowed={!isLoggedIn} redirectTo="/">
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <ProtectedRoute isAllowed={!isLoggedIn} redirectTo="/">
              <Register />
            </ProtectedRoute>
          }
        />
        <Route
          path="/setup-workout"
          element={
            <ProtectedRoute isAllowed={isLoggedIn} redirectTo="/login">
              <SetupWorkout />
            </ProtectedRoute>
          }
        />
        <Route
          path="/log-workout"
          element={
            <ProtectedRoute isAllowed={isLoggedIn} redirectTo="/login">
              <LogWorkout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
