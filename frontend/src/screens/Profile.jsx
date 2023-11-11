import { Container, Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const Hero = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className=" py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
          <h1 className="text-center mb-4" style={{ color: "red",borderBottom:"1px solid black"}}>
            Welcome {userInfo.name}
          </h1>
          <p className="text-center mb-4">
            I am Mohamed Tarek, and I am the author. On behalf I would like to
            welcome you. We are so excited to have you here today. We have a
            great program lined up, and we can't wait to share it with you.
            Before we get started, I would like to take a moment to thank our
            sponsors. Without their support, this event would not be possible.
            And now, without further ado, let's get started. Again, welcome
            <h3 style={{ color: "blue" }}>{userInfo.name}</h3>. We are so glad
            to have you here. This is just a sample introduction, and you should
            tailor it to your specific event. Be sure to personalize it by
            greeting the audience by name and introducing yourself and your
            role. Be sure to thank your sponsors, if applicable, and give a
            brief overview of the event program.
          </p>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
