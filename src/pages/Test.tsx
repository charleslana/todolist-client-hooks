import React, {useState} from 'react';

const Test = () => {
    const [value, setValue] = useState('');

    return (
        <>
            <input
                type={'text'}
                placeholder={'change title'}
                value={value}
                onChange={event => setValue(event.target.value)}
            />
            <h3>{value}</h3>
        </>
    );
}

export default Test;