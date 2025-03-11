import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  }, [token]);

  const API_URL = 'http://localhost:5000/api/auth';
  const login = async (email, password) => {
    try {
      const res = await axios.post(`${API_URL}/login`, { email, password });
  
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        setToken(res.data.token);
        setUser({ isAdmin: res.data.isAdmin });
  
        return { status: "success", isAdmin: res.data.isAdmin }; // Return response
      }
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      return { status: "error" }; // Return an error response
    }
  };
  


  const signup = async (name, email, password) => {  // <-- Accept 'name'
    console.log("Signup Request:", { name, email, password });
  
    try {
      const res = await axios.post(`${API_URL}/signup`, { name, email, password }); // <-- Send 'name'
      console.log("Signup Successful:", res.data);
    } catch (err) {
      console.error("Signup Error:", err.response?.data || err.message);
    }
  };
  
  


  const logout = () => {
    setToken('');
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout ,signup}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;


