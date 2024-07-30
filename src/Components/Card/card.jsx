import axios from 'axios';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardPage() {

    const [card, setCard] = useState([]);

    const getAllData = () => {
        axios.get("http://localhost:3000/data").then(res => {
            setCard(res.data)
        })
    }


    useEffect(() => {
        getAllData()
    }, [])

    return (
        <>
            <Container>
                <Row className='justify-content-center mt-5'>
                    {card.map((user) => {
                        return (
                            <Col lg="4" className='mt-3 '>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={user.image} style={{ height: "160px" }} />
                                    <Card.Body>
                                        <Card.Title>{user.name}</Card.Title>
                                        <Card.Text>
                                            {user.description}
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </>
    );
}

export default CardPage;