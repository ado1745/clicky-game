import React from "react"
import styled from 'styled-components';


export default function () {


    const LightFooter = styled.div`
    background-color: #6956AF;
    min-height: 4.5em;
    `

    const DarkFooter = styled.div`
    min-height: 3em;
    line-height: 3em;
    color: white;
    background-color: #5138a1;
    `


    return (
        <div>
            <LightFooter />
            <DarkFooter>
                <strong>Clicky Game! React</strong>
            </DarkFooter>
        </div>
    );
}