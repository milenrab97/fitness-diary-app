import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SetupWorkout from './pages/SetupWorkout/SetupWorkout';
import Header from './components/Header';
import LogWorkout from './pages/LogWorkout/LogWorkout';

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
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/setup-workout" element={<SetupWorkout />} />
          <Route path="/log-workout" element={<LogWorkout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
