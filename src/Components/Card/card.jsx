import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export default function card_comp() {

  const [card, setCard] = useState([])

  const getAllData = () => {
    axios.get("https://instagram-backen.onrender.com/data").then(res => {
      setCard(res.data);
    })
  }

  const deleteData = (a) => {
    axios.delete(`https://instagram-backen.onrender.com/data/${a}`)
      .then(response => {
        alert(`Deleteasas ${a}`);
      })
      .catch(error => {
        console.error(error);
      })
  }
  useEffect(() => {
    getAllData()
  }, [])
  // 


  return (
    <>
      <Container>
        <Row className='justify-content-center mt-5'>
          {card.map((user) => {
            return (
              <Col lg={3} className='mt-5' >
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={user.image} style={{ height: "170px" }} />
                  <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>
                      {user.description}
                    </Card.Text>
                    <Button onClick={() => deleteData(user.id)}>Delete</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  )
}