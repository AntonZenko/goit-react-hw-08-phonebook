import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { contactsOperations } from '../redux/contact';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Loader from '../Loader/Loader';
// import Skeleton from '@mui/material/Skeleton';
// import Box from '@mui/material/Box';

import { Item, Name, Number, Btn } from './ContactListItem.styled';

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
      <Name>{name}:</Name>
      <Number>{number}</Number>

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
        // <Box sx={{ width: '100%' }}>
        //   <Skeleton animation="wave" />
        // </Box>
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
