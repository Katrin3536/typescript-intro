import React, {useState} from 'react';

type UncontrolledOnOffType ={
    onChange : (on: boolean)=>void,
}

const UncontrolledOnOff = (props: UncontrolledOnOffType):JSX.Element => {

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

    const onClicked = () => {
            onClick('ON');
            props.onChange(true);
    }
    const offClicked = () => {
            onClick('OFF');
            props.onChange(false);
    }

    return (
        <div>
            <button onClick={onClicked} style={styleButtonOn}>ON</button>
            <button onClick={offClicked} style={styleButtonOff}>OFF</button>
            <button style={roundButton}>S</button>
        </div>
    );


};

export default UncontrolledOnOff;