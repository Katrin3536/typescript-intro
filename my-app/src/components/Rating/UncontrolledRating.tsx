import React, {useState} from 'react';

type RatingPropsType = {
    // value: number //(0 | 1 | 2 | 3 | 4 | 5)
}

export function UncontrolledRating(props: RatingPropsType) {

    const stars = [1, 2, 3, 4, 5];

    let [value, setValue] = useState(0);

    // const onClickHandler = (clickValue: number) => {
    //     setValue(clickValue);
    // };
    return (
        <div>

            {stars.map((starIndex, index) => <Star selected={value > index} setValue={setValue} index={starIndex}/>)}

            {/*<Star selected={value > 0} onClickHandler={onClickHandler}*/}
            {/*      index={1}/> /!* <button onClick={()=>{setValue(1)}}>1</button>*!/*/}
            {/*<Star selected={value > 1} onClickHandler={onClickHandler}*/}
            {/*      index={2}/> /!*<button onClick={()=>{setValue(2)}}>2</button>*!/*/}
            {/*<Star selected={value > 2} onClickHandler={onClickHandler}*/}
            {/*      index={3}/> /!*<button onClick={()=>{setValue(3)}}>3</button>*!/*/}
            {/*<Star selected={value > 3} onClickHandler={onClickHandler}*/}
            {/*      index={4}/> /!*<button onClick={()=>{setValue(4)}}>4</button>*!/*/}
            {/*<Star selected={value > 4} onClickHandler={onClickHandler}*/}
            {/*      index={5}/> /!*<button onClick={()=>{setValue(5)}}>5</button>*!/*/}
        </div>
    );


}

type StarPropsType = {
    selected: boolean,
    setValue: (clickValue: number) => void,
    index: number,
}

function Star(props: StarPropsType) {

    const onClickHandler = () => {
        props.setValue(props.index)
    }

    return <span onClick={() => onClickHandler()}>{props.selected ? <b>star</b> : 'star'}</span>;
}