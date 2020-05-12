import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function Form() {
    return (
        <div id="form">
            <TextField
                variant='outlined'
                inputProps={{ placeholder: 'Enter a product...' }}
                style={{ width: 360 }}
            />
            <Button
                variant='contained'
                color='primary'
            >
                Search
            </Button>
        </div>
    )
}
