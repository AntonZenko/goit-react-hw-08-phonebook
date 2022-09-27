import { Wrapper, Name, Text, NavLinkStyled } from './UserMenu.styled';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../redux/auth';
import Button from '@mui/material/Button';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUsername);
  return (
    <Wrapper>
      <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
      <div>
        <Text>Hello, </Text>
        <Name>{userName}</Name>
        <Button
          type="button"
          variant="contained"
          size="small"
          color="primary"
          onClick={() => dispatch(authOperations.logOut())}
        >
          Log out
        </Button>
        {/* <Button
          type="button"
          onClick={() => dispatch(authOperations.logOut())}
        ></Button> */}
      </div>
    </Wrapper>
  );
};
