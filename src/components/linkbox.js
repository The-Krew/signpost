import { Col, Container, Row } from "reactstrap";
import ComboBox from "./comboBox.";


const Linkbox = () => {

    return (
        <>
            <form className='form-linkbox'>
                    <Row>
                        <Col xl="2" lg="3" md="3" sm="4" xs="5">
                            <ComboBox />
                        </Col>
                        <Col xl="4" lg="4" md="3" sm="8" xs="7">
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
                                    <button type='submit' className="form-submit" >Přidat</button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
            </form>
        </>
    );
}

export default Linkbox;
