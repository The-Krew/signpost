import React from "react";
import ThemePlugin from "components/plugins/theme/theme.plugin";
import { Col, Container, Row } from "reactstrap";
import Linkbox from "components/plugins/linkbox/linkbox.plugin";
import input from "../../custom/links.info";
import info from "../../custom/profile.info"
import Profile from "components/plugins/profile/profile.plugin";



function Admin(props) {
  const [loaded, setLoaded] = React.useState(false);
  const [slots, setSlots] = React.useState([]);
  const [profile, setProfile] = React.useState(
    {
      img: "", 
      user: "",
      description: "",
      background: "rgb(5,92,152)"  
    });

  const handleOnload = () => {
    setSlots(input);
    setLoaded(true);
    setProfile(info)
  }
  const mainPanelRef = React.useRef(null);
  return (
        <React.Fragment>
            {loaded? null: handleOnload()}
            <div ref={mainPanelRef}>
              <Container>
                <Row>
                <Col xl="1" lg="1"/>
                <Col xl="10" lg="10" md="12">
                  <Profile
                  img={profile.img}
                  user={profile.user}
                  description={profile.description}
                  background={profile.background}              
                  />
                </Col>
                <Col xl="1" lg="1"/>
                </Row>
                <Row>
                  <Col xl="2" lg="2" />
                  <Col xl="8" lg="8" md="12">
                    {/* <Linkbox active={true} handelNewSlot={handelNewSlot}/> */}
                    {
                      slots.map((el) => {
                        return(
                          <Linkbox type={el.type} name={el.name} url={el.url} show={el.show} disclick={el.disclick}/>
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
