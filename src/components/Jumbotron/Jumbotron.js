import React from "react";
import styled from 'styled-components'
import JumboImg from '../Jumbotron/bg.png'

export default function (props) {

    const Jumbo = styled.div`
    background-image: url(${JumboImg});
    color: white;
    padding: 50px;
    `
    return (
        <Jumbo className="text-center jumbotron">
            <h1 className="m-4 display-2"><strong>Clicky Game!</strong></h1>
            <h4><strong>Click on an image to earn points, but don't click on any more than once!</strong></h4>
        </Jumbo>
    )
}