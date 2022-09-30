import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../redux/auth';
import { Wrapper, Text, NavLinkStyled, Btn, Box } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUsername);
  return (
    <Wrapper>
      <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
      <Box>
        <Text>Hello,</Text>
        <Text>{userName}</Text>
        <Btn
          type="button"
          variant="contained"
          size="medium"
          color="secondary"
          onClick={() => dispatch(authOperations.logOut())}
        >
          Log out
        </Btn>
      </Box>
    </Wrapper>
  );
};
