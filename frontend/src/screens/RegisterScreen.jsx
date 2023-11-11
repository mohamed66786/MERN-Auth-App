import { useState,useEffect } from "react";
import { Link ,useNavigate} from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../slices/authSlice";
import {toast}from "react-toastify"
import Loader from "../components/Loader";
import { useRegisterMutation } from "../slices/userApiSlice";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);
  const [register, { isLoading }] = useRegisterMutation();

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if(password!==confirmPassword){
      toast.error("password does not match")
    }else{
      try {
        const res=await register ({name,email,password}).unwrap();
        dispatch(setCredentials({...res}));
        navigate("/");
      } catch (err) {
      toast.error(err?.data?.message||err.error)
        
      }
    }
  };
  return (
    <FormContainer>
      <h1 style={{ margin: "auto" }}>Sig Up</h1>

      <Form onSubmit={submitHandler}>
        <Form.Group className="m-2" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="m-2" controlId="email">
          <Form.Label>Email Adress</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="m-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="m-2" controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Confirm Password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>


      {isLoading&&<Loader/>}
        <Button
          type="submit"
          variant="primary"
          className="mt-3"
          style={{ width: "50%", marginLeft: "25%" }}
        >
          Sign Up
        </Button>

        <Row className="py-3">
          <Col>
           Already have an account <Link to="/login">Login</Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  );
};

export default RegisterScreen;
