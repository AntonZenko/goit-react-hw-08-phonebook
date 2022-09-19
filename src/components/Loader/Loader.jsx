import { Spinner } from './Loader.styled';

export default function Loader() {
  return (
    <Spinner
      strokeColor="grey"
      strokeWidth="4"
      animationDuration="0.75"
      width="26"
      visible={true}
    />
  );
}
