import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

import s from './RegisterPage.module.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      {/* <h1 className={s.title}>Register</h1> */}

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <TextField
          required
          id="outlined-basic"
          variant="outlined"
          label="Name"
          type="name"
          name="name"
          value={name}
          className={s.label}
          onChange={handleChange}
        />
        <TextField
          required
          id="outlined-basic"
          variant="outlined"
          label="Email"
          type="email"
          name="email"
          value={email}
          className={s.label}
          onChange={handleChange}
        />
        <TextField
          required
          id="outlined-basic"
          variant="outlined"
          label="Password"
          type="password"
          name="password"
          value={password}
          className={s.label}
          onChange={handleChange}
        />

        <Button variant="contained" type="submit">
          Register
        </Button>
      </form>
    </div>
  );
}
