import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loader({ isLoading, spinner = false }) {
  return (
    <>
      {!spinner ? (
        <div>
          <Backdrop
            sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
            open={isLoading}
          >
            <CircularProgress color="inherit" size="30" />
          </Backdrop>
        </div>
      ) : (
        <CircularProgress color="inherit" thickness={3.2} size={30} />
      )}
    </>
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  spinner: PropTypes.bool,
};
