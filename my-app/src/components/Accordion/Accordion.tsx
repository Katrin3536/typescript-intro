import React from 'react';

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean,
    onClick:()=>void
    // onClick:(value:boolean)=>void-второй способ со значением

}

function Accordion(props: AccordionPropsType) {
    return <div>

        <AccordionTitle title={props.titleValue} onClick={props.onClick}/>
        {/*<AccordionTitle title={props.titleValue} onClick={props.onClick} value={!props.collapsed}/> второй способ с передачей значения*/}
        {!props.collapsed && <AccordionBody/>}

    </div>;
}


// переписали условие выше
// function Accordion(props:AccordionPropsType) {
//     console.log("Accordion rendering")
//     if (props.collapsed === true) {
//         return <div>
//             <AccordionTitle title = {props.titleValue}/>
//         </div>
//     }
//     return <div>
//         <AccordionTitle title = {props.titleValue}/>
//         <AccordionBody/>
//     </div>
// }

type AccordionTitlePropsType = {
    title: string
    onClick:()=>void
    // onClick:(value:boolean)=>void,
    // value:boolean второй способ со значением


}

function AccordionTitle(props: AccordionTitlePropsType) {

    return <h3 onClick={props.onClick}>{props.title}</h3>;
    // return <h3 onClick={()=>props.onClick(!props.value)}>{props.title}</h3> второй способ со значением
}


function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default Accordion;