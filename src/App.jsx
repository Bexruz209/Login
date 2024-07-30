import { Col, Container, Form, Row } from "react-bootstrap";
import CardPage from "./Components/Card/card";
import axios from "axios";
import { useState } from "react";
import "./index.css"

export default function App() {

  const [name, setName] = useState()
  const [description, setDescription] = useState()
  const [img, setImg] = useState()

  let obj = {
    name: name,
    description: description,
    image: img
  }
  
  const postData = (e) => {
    axios.post('https://instagram-backen.onrender.com/data', obj)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error("Error sending data: ", error);
      });
    }


  return (
    <>
      <Container>
        <Row className="justify-content-center mt-5">
          <Col lg="6">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Card name</Form.Label>
                <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter card name" />
                <Form.Text className="text-muted">
                  Iltimos to'liq to'ldiring
                </Form.Text>
              </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Description" />
                <Form.Text className="text-muted" >
                  Iltimos to'liq to'ldiring
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Image</Form.Label>
                <Form.Control onChange={(e) => setImg(e.target.value)} type="text" placeholder="Image" />
                <Form.Text className="text-muted" >
                  Iltimos to'liq to'ldiring
                </Form.Text>
              </Form.Group>

            </Form>
            <button  className="bb" onClick={() => postData() } >Login</button>
          </Col>
        </Row>
      </Container>
      <CardPage />
    </>
  )
}
