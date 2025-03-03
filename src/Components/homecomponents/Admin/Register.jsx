import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({ username: '', email: '', phoneNumber: '', role: 'user' });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.role === 'user') {
      alert('OTP Sent to the Registered Email.');
      navigate('/otp', { state: formData });
    } else {
      navigate('/upload');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md transition hover:scale-105 duration-300">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Username</label>
            <input type="text" name="username" onChange={handleChange} required className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400" />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" name="email" onChange={handleChange} required className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400" />
          </div>
          <div>
            <label className="block text-sm font-medium">Phone Number</label>
            <input type="tel" name="phoneNumber" onChange={handleChange} required className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400" />
          </div>
          <div>
            <label className="block text-sm font-medium">Role</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="role" value="user" checked={formData.role === 'user'} onChange={handleChange} /> User
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="role" value="expert" onChange={handleChange} /> Expert
              </label>
            </div>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition">{formData.role === 'user' ? 'Submit' : 'Next'}</button>
        </form>
      </div>
    </div>
  );
}

export default Register;