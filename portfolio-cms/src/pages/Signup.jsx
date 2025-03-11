import { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';

const Signup = () => {
  const { signup } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleSignup = (e) => {
  e.preventDefault();
  console.log("Name Entered:", name);
  console.log("Email Entered:", email); // ✅ Debugging
  console.log("Password Entered:", password); // ✅ Debugging
  signup(name,email, password);
};
return (
<div className='min-h-screen flex bg-gray-500 flex-col justify-center items-center px-6 pt-[110px] md:pt-[100px] pb-[80px] md:pb-[100px]' >
<form onSubmit={handleSignup}>
<input 
  type="text" 
  value={name} 
  onChange={(e) => setName(e.target.value)} 
  placeholder="Enter your name" 
  required
/>

    <input 
      type="email" 
      value={email} 
      onChange={(e) => setEmail(e.target.value)} 
      placeholder="Enter your email" 
      required
    />
    <input 
      type="password" 
      value={password} 
      onChange={(e) => setPassword(e.target.value)} 
      placeholder="Enter your password" 
      required
    />
    <button type="submit">Sign Up</button>
  </form>
</div>
);

};

export default Signup;
