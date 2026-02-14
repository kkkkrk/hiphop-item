import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import { Card, Row, Col, Button, CardImg, CardBody, CardText, CardTitle } from 'react-bootstrap';

export default async function Detail(props) {
    const resolvedParams = await props.params;
    const db = (await connectDB).db("yes24_db")
    let products = await db.collection('music_albums').findOne({
        _id: new ObjectId(resolvedParams.id)
    })
    return (
        <Card style={{ width: '100%', margin: '30px' }}>
            <Row className="g-0">
                <Col md={4}>
                    <CardImg variant="top" src={products.image_url} />
                </Col>
                <Col md={8}>
                    <CardBody>
                        <CardTitle>{products.title}</CardTitle>
                        <CardText>
                            아티스트: {products.artist}<br />
                            가격: {products.price}<br />
                            평점: {products.rate}
                        </CardText>
                        <Button variant="primary" >구매하기</Button>
                    </CardBody>
                </Col>
            </Row>
        </Card >
    );
}