import { Wrapper, Button, Name, Text } from './UserMenu.styled';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../redux/auth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUsername);
  return (
    <Wrapper>
      <Text>Hello, </Text>
      <Name>{userName}</Name>
      <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log out
      </Button>
    </Wrapper>
  );
};
