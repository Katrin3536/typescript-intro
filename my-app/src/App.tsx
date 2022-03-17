import React, {useState} from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';
// @ts-ignore
import OnOff from './components/OnOff/OnOff';
import UncontrolledAccordion from './components/Accordion/UncontrolledAccordion';
import { UncontrolledRating } from './components/Rating/UncontrolledRating';


function App() {
    // console.log('App rendering');

    let [value, setValue] = useState(false);


    const onClick = (nameButton: string) => {
        setValue(nameButton === 'ON');
    };


    return (
        <div>
            {/*<PageTitle title = {"This is APP component"}/>*/}
            {/*<PageTitle title = {"My friends"}/>*/}
            {/*Article 1*/}
            {/*<Rating value = {3}/>*/}
            {/*<Accordion titleValue={'Menu'} collapsed={true}/>*/}
            {/*<Accordion titleValue={'Users'} collapsed={false}/>*/}
            {/*Article 2*/}

            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledAccordion titleValue={'Users'}/>

            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>

            <UncontrolledRating/>

            <OnOff turnOn={value} onClick={onClick}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('TitleApp rendering');

    return <h1>{props.title}</h1>;
}

export default App;
