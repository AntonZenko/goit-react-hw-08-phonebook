import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { contactsOperations } from '../redux/contact';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Loader from '../Loader/Loader';

import { Item, Name, Number, Btn, ItemBox } from './ContactListItem.styled';

function ContactListItem({ name, number, id }) {
  const dispatch = useDispatch();
  const [isDeleting, setIsDeleting] = useState(false);

  const isLoading = false;

  const handelDeleteContact = id => {
    setIsDeleting(true);
    dispatch(contactsOperations.deleteContact(id)).finally(() => {
      setIsDeleting(false);
    });
  };

  return (
    <Item>
      <ItemBox>
        <Name>{name}:</Name>
        <Number href="tel:+380961111111">{number}</Number>
      </ItemBox>

      {!isDeleting ? (
        <Btn
          type="button"
          variant="contained"
          size="medium"
          color="secondary"
          disabled={isLoading}
          onClick={() => {
            handelDeleteContact(id);
            Notify.success(`Contact ${name} deleted!`, {
              timeout: 1500,
            });
          }}
        >
          Delete
        </Btn>
      ) : (
        <Loader isLoading={isDeleting} spinner={true} />
      )}
    </Item>
  );
}

export default ContactListItem;

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
