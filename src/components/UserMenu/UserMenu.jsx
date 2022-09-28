import { Wrapper, Name, Text, NavLinkStyled, Btn } from './UserMenu.styled';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../redux/auth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUsername);
  return (
    <Wrapper>
      <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
      <div>
        <Text>Hello,</Text>
        <Name>{userName}</Name>
        <Btn
          type="button"
          variant="contained"
          size="medium"
          color="secondary"
          onClick={() => dispatch(authOperations.logOut())}
        >
          Log out
        </Btn>
      </div>
    </Wrapper>
  );
};
