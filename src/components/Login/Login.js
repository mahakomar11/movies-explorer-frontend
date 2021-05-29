import SignTop from '../SignTop/SignTop';
import SignForm from '../SignForm/SignForm';

function Login() {
  return (
    <page>
      <SignTop message='Рады видеть!' />
      <SignForm place='signin' />
    </page>
  );
}

export default Login;
