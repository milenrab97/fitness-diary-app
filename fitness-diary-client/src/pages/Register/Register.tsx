import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API } from '../../env';

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const register = async (username: string, password: string) => {
    const response = await axios.post(`${API}/api/users`, {
      username,
      password,
    });

    if (response.status === 201) {
      // Update the authentication state and store the token
      navigate('/');
    } else {
      // Handle login failure, show error message, etc.
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    // Call the login function from AuthContext
    await register(username, password);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      <form id="register" onSubmit={handleRegister}>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-600"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
