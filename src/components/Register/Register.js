import SignTop from '../SignTop/SignTop';
import SignForm from '../SignForm/SignForm';

function Register(props) {
  const {onRegister} = props;

  return (
    <>
      <SignTop message='Добро пожаловать!' />
      <SignForm place='signup' onSubmit={onRegister}/>
    </>
  );
}

export default Register;
