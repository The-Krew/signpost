import React from "react";

import { Dropdown, DropdownToggle, Row, Col, Container } from "reactstrap";
import { ThemeContext, themes } from "contexts/themeContext";
import {CogIcon} from "@heroicons/react/solid"

function ThemePlugin(props){
    const [dropDownIsOpen, setdropDownIsOpen] = React.useState(false);
    const handleDropdown = () => {
        setdropDownIsOpen(!dropDownIsOpen);
    };
    return(
        <>
          <div className="theme-plugin s-6">
            <Dropdown isOpen={dropDownIsOpen} toggle={handleDropdown}>
                <DropdownToggle tag="div">
                    <CogIcon />
                </DropdownToggle>
                <ul className="dropdown-menu show text-center">
                    <li className="header-title"> Theme selection</li>
                    <li className="adjustments-line">
                        <ThemeContext.Consumer>
                            {({changeTheme}) => (
                                <Row>
                                    <Col xs="1"/>
                                    <Col xs="3">
                                    LIGHT
                                    </Col>
                                    <Col xs="2">
                                    <span
                                    className="s-3 light-badge"
                                    onClick={() => changeTheme(themes.light)}
                                    />
                                    </Col>
                                    <Col xs="2">
                                    <span
                                    className="s-3 dark-badge"
                                    onClick={() => changeTheme(themes.dark)}
                                    />
                                    </Col>
                                    <Col xs="3">
                                    DARK
                                    </Col>
                                    <Col xs="1"/>
                                    
                                </Row>
                            )}
                        </ThemeContext.Consumer>
                    </li>
                </ul>
            </Dropdown>
          </div>
        </>
    )
}

export default ThemePlugin;