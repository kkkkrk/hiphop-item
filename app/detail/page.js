import { Card, Row, Col, Button, CardImg } from 'react-bootstrap';

export default function Detail(props) {
    return (
        <Card style={{ width: '100%', margin: '30px' }}>
            하이
            <Row className="g-0">
                <Col md={4}>
                    {/* <CardImg variant="top" src={props.albums[id].src} /> */}
                    {/* 주소 여러 주소 생성 코딩애플 영상 보기 */}
                </Col>
                {/* <Col md={8}>
                    <Card.Body>
                        <Card.Title>{props.albums[id].alt}</Card.Title>
                        <Card.Text>
                            아티스트: {props.albums[id].artist}
                        </Card.Text>
                        <Link to="https://namu.wiki/w/%EC%8B%9D%EC%BC%80%EC%9D%B4">
                            <Button variant="primary" >구매하기</Button>
                        </Link>
                    </Card.Body>
                </Col> */}
            </Row>
        </Card >
    );
}