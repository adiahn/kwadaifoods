import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
  const { token, setToken } = useToken();
  useEffect(() => {
    const localToken = localStorage.getItem('token');
    if (localToken && !token) {
      setToken(localToken);
    }
    console.log(
      'Token status checked:',
      localToken ? 'Logged in' : 'Logged out'
    );
  }, [token, setToken]);

  const localToken = localStorage.getItem('token');
  if (!localToken) {
    return <Navigate to="/" replace />;
  }

  return element;
};

export default ProtectedRoute;
