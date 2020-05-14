import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function Form({ isLoading, setIsLoading }) {
    const fakeLoader = () => {
        setIsLoading(true)
        setTimeout(function () { setIsLoading(false); }, 3000);
    }
    return (
        <div>
            <div id="form">
                <TextField
                    variant='outlined'
                    inputProps={{ placeholder: 'Enter a product...' }}
                    style={{ width: 360, marginRight: -4 }}
                />
                <Button
                    variant='contained'
                    color='primary'
                    onClick={fakeLoader}
                >
                    Search
                </Button>
            </div>
        </div>
    )
}
