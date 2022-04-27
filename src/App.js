import './App.css';
import Users from './components/users/Users';
import Navbar from './components/partials/navbar/Navbar';
import UserItem from './components/users/UserItem';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';

function App() {
  return (
    <Router history="browserHistory">
      <div className="App">
        <Navbar />
        <div className="container mt-2">
          <Routes>
            <Route exact path="/users" element={<Users/>} />
            <Route exact path="/users/:login" element={<UserItem/>} />
            <Route exact path='' element={<Users/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
