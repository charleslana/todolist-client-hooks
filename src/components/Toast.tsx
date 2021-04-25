import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions as toastActions } from '../reducers/toast';

const Toast = (props: any) => {

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        props.toastActions.close();
    }

    console.log(props);

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={props.toast.open}
            autoHideDuration={5000}
            onClose={handleClose}
        >
            <Alert elevation={6} severity={props.toast.type} variant={'filled'} onClose={handleClose}>
                {props.toast.message}
            </Alert>
        </Snackbar>
    );
}

const mapStateToProps = ({ toast }: any) => ({
    toast
});

const mapDispatchToProps = (dispatch: any) => ({
    toastActions: bindActionCreators(toastActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Toast);