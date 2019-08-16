import React from "react"
import styled from 'styled-components'

function Navbar(props) {

    const Nav = styled.nav`
    background-color: #5133a4;
    color:white;
    position: fixed;
    width: 100%;
    z-index: 1;
    `
    const Ul = styled.ul`
    list-style: none;
    display: flex;
    font-weight: 600;
    font-size: 1.5em;
    `

    const Li = styled.li`
    padding: .4em 1em;
    `



    return (
        <Nav>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="d-flex flex-row mx-auto">
                    <Ul>
                        <Li className="brand">
                            <strong>Clicky Game</strong>
                        </Li>
                        <Li className="message" id="message">
                            {props.message || "Click an image to begin!"}
                        </Li>
                        <Li className="ml">
                            Score: {props.score || 0} | Top Score: {props.topScore || 0}
                        </Li>
                    </Ul>
                </div>
            </nav>
        </Nav>
    );
}

export default Navbar;