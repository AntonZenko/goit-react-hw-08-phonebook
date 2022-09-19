import PropTypes from 'prop-types';
import { Item, Name, Number, Button } from './ContactListItem.styled';
import { useDeleteContactMutation } from '../redux/contactApi';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Loader from 'components/Loader/Loader';

function ContactListItem({ name, number, id }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  return (
    <Item>
      <Name>{name}:</Name>
      <Number>{number}</Number>

      {isLoading ? (
        <Loader />
      ) : (
        <Button
          type="button"
          disabled={isLoading}
          onClick={() => {
            deleteContact(id);
            Notify.success(`Contact ${name} deleted!`);
          }}
        >
          Delete
        </Button>
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
