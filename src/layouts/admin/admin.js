import React from "react";
import ThemePlugin from "components/plugins/theme/theme.plugin";
import { Col, Container, Row } from "reactstrap";
import Linkbox from "components/plugins/linkbox/linkbox.plugin";



function Admin(props) {
  const [loaded, setLoaded] = React.useState(false);
  const [slots, setSlots] = React.useState([]);

  const handelNewSlot = (newOption) => {
    console.log(newOption);
    console.log(slots);
    let newArray = slots;
    newArray.push(newOption);
    setSlots(newArray);
  }
  const handleOnload = () => {
    let input = [{type: 'discord', name: 'Testing Input', url: 'https://Testing.url', show: true}, {type: 'facebook', name: 'Testing Input', url: 'https://Testing.url', show: false}];
    setSlots(input);
    setLoaded(true);
  }
  const mainPanelRef = React.useRef(null);
  return (
        <React.Fragment>
            {loaded? null: handleOnload()}
            <div ref={mainPanelRef}>
              <Container>
                <Row>
                  <Col xl="2" lg="2" />
                  <Col xl="8" lg="8" md="12">
                    <Linkbox active={true} handelNewSlot={handelNewSlot}/>
                    {
                      slots.map((el) => {
                        return(
                          <Linkbox type={el.type} name={el.name} url={el.url} show={el.show}/>
                        )
                      })
                    }
                  </Col>
                  <Col xl="2" lg="2"/>
                </Row>
              </Container>
            </div>
          <ThemePlugin />
        </React.Fragment>
  );
}

export default Admin;
