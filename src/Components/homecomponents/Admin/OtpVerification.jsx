
// src/components/OtpVerification.js
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function OtpVerification() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleOtpChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleVerify = () => {
    if (otp.join('') === '123456') {
      alert('OTP Verified! Registration successful.');
      navigate('/');
    } else {
      alert('Invalid OTP. Please try again.');
      setOtp(['', '', '', '', '', '']);
    }
  };

  const handleResend = () => {
    setTimer(30);
    setCanResend(false);
    alert(`New OTP sent to ${state?.email}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">OTP Verification</h2>
        <p className="text-center text-gray-600 mb-4">OTP sent to {state?.email}</p>

        <div className="flex justify-center gap-2 mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              className="w-12 h-12 text-xl text-center border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          ))}
        </div>

        <div className="text-center mt-4 mb-5">
          {canResend ? (
            <button
              onClick={handleResend}
              className="text-blue-600 flex items-center justify-center gap-1 hover:underline"
            >
              <span>&#x21bb;</span> Resend OTP
            </button>
          ) : (
            <p className="text-gray-600">Resend OTP in {timer}s</p>
          )}
        </div>

        <button
          onClick={handleVerify}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Verify OTP
        </button>

       
      </div>
    </div>
  );
}

export default OtpVerification;
