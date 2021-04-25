import React from 'react';

const NotFound = (props: any) => {

    return (
        <>
            <h1>Not Found</h1>
            <button onClick={props.history.goBack}>Back</button>
        </>
    );
}

export default NotFound;