import { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineLock,
  AiOutlinePhone,
} from 'react-icons/ai'; 

const RegistrationForm = () => {
  const [role, setRole] = useState('doctor');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    experience: '',
    emergencyContact: '',
    allergies: '',
    medicalHistory: '',
  });
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form and submit data
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="role" className="block text-gray-600">Register as:</label>
            <select
              id="role"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="mt-1 block w-full p-2 border rounded-md bg-gray-50 text-gray-600"
            >
              <option value="doctor">Doctor</option>
              <option value="patient">Patient</option>
            </select>
          </div>

          <div>
            <label htmlFor="name" className="block text-gray-600">Name</label>
            <div className="flex items-center border border-gray-300 rounded-md shadow-sm mt-1">
              <AiOutlineUser className="w-5 h-5 text-gray-500 mx-2" />
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="w-full p-2 focus:outline-none bg-slate-100"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-600">Email</label>
            <div className="flex items-center border border-gray-300 rounded-md shadow-sm mt-1">
              <AiOutlineMail className="w-5 h-5 text-gray-500 mx-2" />
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full p-2 focus:outline-none bg-slate-100"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-600">Password</label>
            <div className="flex items-center border border-gray-300 rounded-md shadow-sm mt-1">
              <AiOutlineLock className="w-5 h-5 text-gray-500 mx-2" />
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className="w-full p-2 focus:outline-none bg-slate-100"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-gray-600">Phone</label>
            <div className="flex items-center border border-gray-300 rounded-md shadow-sm mt-1">
              <AiOutlinePhone className="w-5 h-5 text-gray-500 mx-2" />
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                className="w-full p-2 focus:outline-none bg-slate-100"
              />
            </div>
          </div>

          {role === 'doctor' && (
            <div>
              <h3 className="mt-4 text-lg font-semibold text-gray-700">Doctor Details</h3>
              <div>
                <label htmlFor="experience" className="block text-gray-600">Experience (years)</label>
                <input
                  id="experience"
                  name="experience"
                  type="number"
                  required
                  value={formData.experience}
                  onChange={handleInputChange}
                  placeholder="Enter years of experience"
                  className="w-full p-2 border border-gray-300 rounded-md mt-1 focus:outline-none bg-slate-100"
                />
              </div>
            </div>
          )}

          {role === 'patient' && (
            <div>
              <h3 className="mt-4 text-lg font-semibold text-gray-700">Patient Details</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="emergencyContact" className="block text-gray-600">Emergency Contact</label>
                  <input
                    id="emergencyContact"
                    name="emergencyContact"
                    type="text"
                    required
                    value={formData.emergencyContact}
                    onChange={handleInputChange}
                    placeholder="Enter emergency contact"
                    className="w-full p-2 border border-gray-300 rounded-md mt-1 focus:outline-none bg-slate-100"
                  />
                </div>
                <div>
                  <label htmlFor="allergies" className="block text-gray-600">Allergies</label>
                  <input
                    id="allergies"
                    name="allergies"
                    type="text"
                    value={formData.allergies}
                    onChange={handleInputChange}
                    placeholder="Enter known allergies"
                    className="w-full p-2 border border-gray-300 rounded-md mt-1 focus:outline-none bg-slate-100"
                  />
                </div>
                <div>
                  <label htmlFor="medicalHistory" className="block text-gray-600">Medical History</label>
                  <input
                    id="medicalHistory"
                    name="medicalHistory"
                    type="text"
                    value={formData.medicalHistory}
                    onChange={handleInputChange}
                    placeholder="Enter medical history"
                    className="w-full p-2 border border-gray-300 rounded-md mt-1 focus:outline-none bg-slate-100"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={() => setAgreeTerms((prev) => !prev)}
              className="mr-2"
            />
            <label htmlFor="terms" className="text-gray-600">
              I agree to the <a href="/terms" className="text-blue-500">terms and conditions</a>.
            </label>
          </div>

          {error && (
            <div className="mt-4">
              <div className="flex items-center text-red-600">
                <AlertCircle className="mr-2" />
                <span>{error}</span>
              </div>
            </div>
          )}

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-200 ease-in-out"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
