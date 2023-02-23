import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function ConfirmSnackbar({ open, setOpen }) {

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity='success'
        sx={{ width: '100%' }}
      >
        Data is saved!
      </Alert>
    </Snackbar>

  )
}

export default ConfirmSnackbar