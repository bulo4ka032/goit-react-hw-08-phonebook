import { Helmet, HelmetProvider } from 'react-helmet-async';
import { LoginForm } from 'components/index';

const Login = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <LoginForm />
      </div>
    </HelmetProvider>
  );
};

export default Login;
