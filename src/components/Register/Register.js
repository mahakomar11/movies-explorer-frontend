import SignTop from '../SignTop/SignTop';
import SignForm from '../SignForm/SignForm';

function Register() {
  return (
    <page>
      <SignTop message='Добро пожаловать!' />
      <SignForm place='signup' />
    </page>
  );
}

export default Register;
