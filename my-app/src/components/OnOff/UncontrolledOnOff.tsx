import React, {useState} from 'react';

const UncontrolledOnOff = ():JSX.Element => {

    let [value, setValue] = useState<boolean>(false);


    const onClick = (nameButton: string) => {
        setValue(nameButton === 'ON');
    };


    const styleButtonOn = {backgroundColor: value ? 'green' : ''};
    const styleButtonOff = {backgroundColor: value ? '' : 'red'};
    const roundButton = {
        borderRadius: ' 50px',
        backgroundColor: value ? 'green' : 'red'
    };

    return (
        <div>
            <button onClick={() => onClick('ON')} style={styleButtonOn}>ON</button>
            <button onClick={() => onClick('OFF')} style={styleButtonOff}>OFF</button>
            <button style={roundButton}>S</button>
        </div>
    );


};

export default UncontrolledOnOff;