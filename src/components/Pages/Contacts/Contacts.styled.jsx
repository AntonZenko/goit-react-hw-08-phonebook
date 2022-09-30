import styled from 'styled-components';

export const Form = styled.form`
  margin: 20px 20px;
  width: 100%;
`;

export const Input = styled.input`
  height: 20px;
  border-radius: 5px;
  padding: 2px 10px;
`;

export const Button = styled.button`
  padding: 2px 20px;
  height: 30px;
  margin-left: 10px;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #ff0000;
    color: #fff;
  }
`;
export const ContactsPageBox = styled.div`
  display: flex;
  @media screen and (max-width: 1023px) {
    flex-direction: column;
  }
`;

export const ContactsFormBox = styled.div`
  padding: 0 30px;
  @media screen and (min-width: 488px) {
    width: 70%;
    margin: 0 auto;
  }
  @media screen and (min-width: 768px) {
    width: 50%;
    margin: 0 auto;
  }
  @media screen and (min-width: 1024px) {
    width: 30%;
    margin: 0 0 0 40px;
  }
`;
export const ContactsListBox = styled.div`
  padding: 0 30px;
  @media screen and (min-width: 488px) {
    width: 70%;
    margin: 0 auto;
  }
  @media screen and (min-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }
  @media screen and (min-width: 1024px) {
    width: 100%;
  }
`;
