import { Container, Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const Hero = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className=" py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
          <h3 className="text-center mb-4" style={{ color: "red",borderBottom:"1px solid black"}}>
            Welcome {userInfo.name}
          </h3>
          <p className="text-center mb-4">
            I am Mohamed Tarek, and I am the author. On behalf I would like to
            welcome you <h4 style={{ color: "blue" }}>{userInfo.name}</h4> We are so glad
            to have you here
          </p>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
