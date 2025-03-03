import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFileAlt } from 'react-icons/fa';

function UploadFile() {
  const [file, setFile] = useState(null);
  const [fileContent, setFileContent] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);

    if (uploadedFile) {
      const reader = new FileReader();
      reader.onload = (event) => setFileContent(event.target.result);
      reader.readAsText(uploadedFile);
    }
  };

  const handleSubmit = () => {
    if (file) {
      alert('File uploaded successfully!');
      alert('OTP Sent to the Registered Email.');
      navigate('/otp');
    } else {
      alert('Please upload a file first.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md transition hover:scale-105 duration-300">
        <h2 className="text-2xl font-bold text-center mb-6">Upload File</h2>
        <div className="flex items-center space-x-4">
          <input type="file" onChange={handleFileChange} className="w-full p-2 border rounded-lg" />
          {file && (
            <FaFileAlt
              className="text-blue-500 text-2xl cursor-pointer hover:scale-110 transition"
              onClick={() => setShowModal(true)}
            />
          )}
        </div>
        {file && <p className="mt-4 text-center">File: {file.name}</p>}
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition mt-4"
        >
          Submit
        </button>
      </div>

      {showModal && (
         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
         <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl  w-full animate-fadeIn">
           <h3 className="text-xl font-bold mb-4">File Preview</h3>
           <div className="max-h-80 overflow-auto p-4 border rounded-lg bg-gray-50 text-sm font-mono whitespace-pre-wrap">
              {file.type.startsWith('image/') ? (
                <img src={URL.createObjectURL(file)} alt="Preview" className="w-full rounded-lg" />
              ) : (
                <pre className="text-sm whitespace-pre-wrap">{fileContent}</pre>
              )}
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-red-500 text-white p-2 rounded-lg w-full hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UploadFile;

