import * as React from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
import { microgen } from '../lib/microgen';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate();
  const [switchAuthForm, setSwitchAuthForm] = React.useState('login');

  React.useEffect(() => {
    (async () => {
      const { error } = await microgen.auth.user();

      if (error) {
        console.log(error);
        return;
      }

      navigate('/profile');
    })();
  }, []);

  const handleRegisterForm = () => {
    setSwitchAuthForm('register');
  };

  const handleLoginForm = () => {
    setSwitchAuthForm('login');
  };

  return (
    <div className="auth-page">
      <div className="auth-button">
        <button onClick={handleLoginForm}>Login</button>
        <button onClick={handleRegisterForm}>Register</button>
      </div>
      {switchAuthForm === 'register' ? <Register /> : <Login />}
    </div>
  );
};

export default Auth;
