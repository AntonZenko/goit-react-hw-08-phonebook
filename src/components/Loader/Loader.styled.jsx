import styled from 'styled-components';
import { RotatingLines } from 'react-loader-spinner';

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  border: none;
`;

export const Spinner = styled(RotatingLines)`
  transform: translate(-50%, -50%);
`;
