import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from '../../redux/contacts/contactsSelectors';
import operations from '../../redux/contacts/contactsOperations';

import s from './ContactsList.module.css';
import Button from '@material-ui/core/Button';

export default function ContactList() {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => dispatch(operations.fetchContacts()), [dispatch]);

  const onDeleteContact = id => dispatch(operations.deleteContact(id));

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.item}>
            <span className={s.text}>{name}:</span>
            <span className={s.text}>{number}</span>

            <Button
              variant="contained"
              color="default"
              size="small"
              onClick={() => onDeleteContact(id)}
              className={s.button}
            >
              Delete
            </Button>
          </li>
        );
      })}
    </ul>
  );
}

