import React from "react";
import ThemePlugin from "components/plugins/theme/theme.plugin";
import { Col, Container, Row } from "reactstrap";
import Linkbox from "components/plugins/linkbox/linkbox.plugin";


let testing = [
  {type:"at", name:"my tag", url:"@testacc", show: true},
  {type:"instagram", name:"my insta", url:"https://instagram.com/"},
  {type:"github", name:"my git", url:"https://github.com/", show: true},
  {type:"facebook", name:"my face", url:"https://facebook.com/"},
  {type:"spotify", name:"my playlist", url:"https://spotify.com/"},
  {type:"spotify", name:"my playlist", url:"https://spotify.com/"},
  {type:"spotify", name:"my playlist", url:"https://spotify.com/"},
  {type:"spotify", name:"my playlist", url:"https://spotify.com/"},
  {type:"spotify", name:"my playlist", url:"https://spotify.com/"},
  {type:"spotify", name:"my playlist", url:"https://spotify.com/"},
  {type:"spotify", name:"my playlist", url:"https://spotify.com/"},
  {type:"spotify", name:"my playlist", url:"https://spotify.com/"},
  {type:"spotify", name:"my playlist", url:"https://spotify.com/"},
  {type:"spotify", name:"my playlist", url:"https://spotify.com/"},
  {type:"spotify", name:"my playlist", url:"https://spotify.com/"},
  {type:"spotify", name:"my playlist", url:"https://spotify.com/"},
  {type:"spotify", name:"my playlist", url:"https://spotify.com/"},
  {type:"spotify", name:"my playlist", url:"https://spotify.com/"},
  {type:"spotify", name:"my playlist", url:"https://spotify.com/"},
  {type:"spotify", name:"my playlist", url:"https://spotify.com/"},
  {type:"spotify", name:"my playlist", url:"https://spotify.com/"},
  {type:"spotify", name:"my playlist", url:"https://spotify.com/"},
  {type:"spotify", name:"my playlist", url:"https://spotify.com/"},
 ];

function Admin(props) {
  const mainPanelRef = React.useRef(null);
  return (
        <React.Fragment>
            <div ref={mainPanelRef}>
              <Container>
                <Row>
                  <Col xl="2" lg="2" />
                  <Col xl="8" lg="8" md="12">
                    <Linkbox active={true}/>
                    {
                      testing.map((el) => {
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
