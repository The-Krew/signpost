import { motion } from "framer-motion";
import React from "react";
import { Col, Row } from "reactstrap";
import SVGloader from "../svg/loader.plugin";
import ComboBox from "./comboBox.";


function Linkbox(props){
    const [url, setUrl] = React.useState(true);
    const handleUrl = () => {
        setUrl(!url);
        console.log(url);
    };
    let active =  props.active;
    return (
        <>
            
                    <div className="row-full">
                        {!active? 
                        <>  
                                <motion.div className="row text-center"
                                    initial={{y: -250}}
                                    animate={{y: 0}}
                                >
                                    <Col xl="1"/>
                                    <Col xl="10" lg="12" md="12" sm="12" xs="12">
                                        <form className='form-linkbox' onClick={() => { window.location.assign(props.url)}}>
                                            <Row>
                                            <Col xs="1" />
                                            <Col xs="2">
                                                <SVGloader type={props.type} />
                                            </Col>
                                            <Col className={!props.show? "text-center text-v-center": "text-center"}>
                                                <Row>
                                                    <Col>
                                                        {props.name}
                                                    </Col>
                                                </Row>
                                                {!props.show? 
                                                null:
                                                    <Row>
                                                        <Col className="text-url">
                                                            {props.url}
                                                        </Col>
                                                    </Row>
                                                }
                                            </Col>
                                            <Col xs="3" />
                                            </Row>
                                        </form>
                                    </Col>
                                    <Col xl="1"/>
                                </motion.div>
                            
                        </>
                        : 
                        <>
                        <motion.div className="row"
                            initial={{y: -250}}
                            animate={{y: 0}}
                        >
                            <Col>
                                <form className='form-linkbox'>
                                    <Row>
                                    <Col xl="2" lg="2" md="2" sm="2" xs="2">
                                        <Row>
                                            <ComboBox />
                                        </Row>
            
                                    </Col>
                                    <Col md="4" sm="10" xs="10">
                                        <input type="text" placeholder="Name"/>
                                    </Col>
                                    <Col xl="6" lg="5" md="6">
                                        <Row>
                                            <Col>
                                                <input type="text" placeholder="URL"/>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <input type="checkbox" defaultChecked onChange={() => handleUrl()}/> <span> Show url</span>
                                            </Col>
                                            <Col>
                                                <button type='submit' className="form-submit" >Add</button>
                                            </Col>
                                        </Row>
                                    </Col>
                                    </Row>
                                </form>
                            </Col>
                        </motion.div>
                        </>
                        }
                        
                    </div>
            
        </>
    );
}

export default Linkbox;
