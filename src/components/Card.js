import React from "react"
import images from "./images";
import styled from 'styled-components';


const CardStyle = styled.div`
        width: 100%;
        position: relative;
        box-shadow: 0 0 10px 1px black;
        padding-top: 100%;

        &:hover{
            box-shadow: 0 0 30px;
        }
    `

const Img = styled.div`
top:0;
position: absolute;
height: 100%;
width:100%;

&:hover{
    top: -5%;
    left:-5%;
    height: 110%;
    width: 110%;
}
`

export default function (props) {

    

    const cardContent = {
        height: '100%',
        width: '100%'
    }

 
    return (
        <CardStyle className="card" onClick={props.cardClick} >
           <Img> <img style={cardContent} src={images[props.cardName]} alt="..." name={props.cardName} /> </Img> 
        </CardStyle>
    )
}