import React, { useState } from 'react';
import Form from './Form';
import loading from '../loading.gif';

export default function Body() {
    const [isLoading, setIsLoading] = useState(false);
    return (
        <div>
            <Form isLoading={isLoading} setIsLoading={setIsLoading} />
            {isLoading && <img src={loading} alt="loading" style={{ display: 'block', maxWidth: 360, margin: '0px auto' }} />}
        </div>
    )
}
