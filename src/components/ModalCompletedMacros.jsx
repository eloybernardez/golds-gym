import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function ModalCompletedMacros({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {open ? (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='alert-completed-macros'
          aria-describedby='alert-macros-completed'
        >
          <DialogTitle
            id='alert-full-macros'
            sx={{ fontWeight: 'bold', color: '#ff2625' }}
          >
            Congratulations! 🎉
          </DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-macros-description'>
              You have completed your daily macros. Although, we recommend not
              getting obsessed with macro counting. If you want to reach your
              goal in the best possible way, ask a professional.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              autoFocus
            >
              Got it
            </Button>
          </DialogActions>
        </Dialog>
      ) : null}
    </div>
  );
}

export default ModalCompletedMacros;
