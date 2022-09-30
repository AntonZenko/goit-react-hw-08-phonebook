import styled from 'styled-components';
import Button from '@mui/material/Button';

export const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Item = styled.li`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #071e22;
  // padding: 8px ;
  // align-items: center;
  // font-size: 18px;
  // :not(:last-child) {
  //   margin-bottom: 10px;
  // }
  @media screen and (min-width: 768px) {
    padding: 8px 0;
    align-items: center;
    font-size: 18px;
    :not(:last-child) {
      // margin-bottom: 10px;
    }
`;

export const Name = styled.span`
  color: #071e22;
  font-weight: 500;
  font-size: 18px;
  @media screen and (min-width: 768px) {
    margin-right: 15px;
  }
`;
export const Number = styled.a`
  color: #071e22;
  text-decoration: none;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const Btn = styled(Button)`
  color: #94d1c4;
  padding: 3px 10px;
  @media screen and (min-width: 768px) {
    padding: 5px 15px;
  }
`;
