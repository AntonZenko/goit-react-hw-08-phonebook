import { Spinner, LoaderContainer } from './Loader.styled';

export default function Loader() {
  return (
    <LoaderContainer>
      <Spinner
        strokeColor="grey"
        strokeWidth="4"
        animationDuration="0.75"
        width="26"
        visible={true}
      />
    </LoaderContainer>
  );
}
