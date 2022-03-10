import React from 'react';

type OnOff = {
    turnOn: boolean
    onClick: (nameButton: string) => void
}
const OnOff = (props: OnOff) => {
    console.log(props);
    const styleButtonOn = {backgroundColor: props.turnOn ? 'green' : ''};
    const styleButtonOff = {backgroundColor: props.turnOn ? '' : 'red'};
    console.log(styleButtonOn);
    console.log(styleButtonOff);
    const roundButton = {
        borderRadius: ' 50px',
        backgroundColor: props.turnOn ? 'green' : 'red'
    };

    return (
        <div>
            <button onClick={() => props.onClick('ON')} style={styleButtonOn}>ON</button>
            <button onClick={() => props.onClick('OFF')} style={styleButtonOff}>OFF</button>
            <button style={roundButton}>S</button>
        </div>
    );


};

export default OnOff;