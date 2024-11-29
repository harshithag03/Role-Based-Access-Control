import { useNavigate } from 'react-router-dom';

export default function Unauthorized() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full text-center space-y-8 p-8 bg-white rounded-lg shadow">
        <h1 className="text-4xl font-bold text-red-600">401</h1>
        <h2 className="text-2xl font-semibold text-gray-900">Unauthorized Access</h2>
        <p className="text-gray-600">
          You don't have permission to access this resource.
        </p>
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}