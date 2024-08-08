import { Badge, Col, Container, Image, Row, Stack } from "react-bootstrap";
import SignupForm from "../../component/signupForm/SignupForm";
// import adminAuthImage from "../../assets/adminAuthImage.svg";
import solarenergy from "../../assets/solarenergy.png";

const SignupPage = () => {
  return (
    <>
      <Container>
        <Row className="vh-100">
          <Col className="d-flex">
            <Stack className="justify-content-center align-items-center">
              {/* <Image src={adminAuthImage} height={300} width={300} /> */}
              <Image src={solarenergy} height={150} width={450} />

              <Stack direction="horizontal" className="justify-content-center">
                <h3 className="mx-2">SOLAR ENERGY</h3>
                <Badge bg="success">ADMIN</Badge>
              </Stack>
              <pre>Empowering Your E-Commerce Empire: Manage, Analyze, and Thrive.</pre>
            </Stack>
          </Col>

          <Col className="d-flex justify-content-center align-items-center">
            <SignupForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignupPage;
