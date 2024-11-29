import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { LogOut, Users, User } from 'lucide-react';

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold">Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              {(user?.role === 'admin' || user?.role === 'moderator') && (
                <Link
                  to="/users"
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 hover:text-gray-700 focus:outline-none transition"
                >
                  <Users className="h-4 w-4 mr-2" />
                  Users
                </Link>
              )}
              <Link
                to="/profile"
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 hover:text-gray-700 focus:outline-none transition"
              >
                <User className="h-4 w-4 mr-2" />
                Profile
              </Link>
              <button
                onClick={logout}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-red-500 hover:text-red-700 focus:outline-none transition"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg font-medium text-gray-900">Welcome, {user?.name}!</h2>
              <p className="mt-1 text-sm text-gray-500">
                You are logged in as a{' '}
                <span className="font-medium capitalize">{user?.role}</span>
              </p>
              <div className="mt-4">
                <h3 className="text-md font-medium text-gray-900">Your Permissions:</h3>
                <ul className="mt-2 list-disc list-inside text-sm text-gray-600">
                  {user?.role === 'admin' && (
                    <>
                      <li>Create users with any role</li>
                      <li>Update user roles</li>
                      <li>Delete users</li>
                      <li>View all user information</li>
                    </>
                  )}
                  {user?.role === 'moderator' && (
                    <>
                      <li>View user information (except admins)</li>
                      <li>Create users with user role only</li>
                    </>
                  )}
                  {user?.role === 'user' && (
                    <>
                      <li>View and edit own profile</li>
                      <li>Access basic features</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}