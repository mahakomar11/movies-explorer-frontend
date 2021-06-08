import SignTop from '../SignTop/SignTop';
import SignForm from '../SignForm/SignForm';

function Login(props) {
  const { onLogin } = props;

  return (
    <>
      <SignTop message='Рады видеть!' />
      <SignForm place='signin' onSubmit={onLogin}/>
    </>
  );
}

export default Login;
