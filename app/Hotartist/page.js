'use client';

import { Card, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';
// import { signIn } from 'next-auth/react'

export default function HotArtist() {
    return (
        <>
            <h4>이번주 핫한 아티스트</h4>
            {/* <button onClick={() => { signIn() }}>로그인</button> */}
            <Card style={{ width: '40rem' }}>
                <Row className="g-0">
                    <Col md={4}>
                        <Card.Img variant="top" src="/sikK.png" />
                    </Col>
                    <Col md={8}>
                        <Card.Body>
                            <Card.Title>식케이</Card.Title>
                            <Card.Text>
                                YELOWS MOB 크루의 수장이며, 2013년 SHOW ME THE MONEY 2, 2015년 SHOW ME THE MONEY 4 출연 경력이 있다. SHOW ME THE MONEY 2 출연 당시 D.O 크루를 희망했으나 선택받지 못하고 탈락했고 SHOW ME THE MONEY 4 출연 당시 팀 AOMG 소속이었으나 팀 디스배틀 이후에 탈락했다. 그러나 박재범과는 SHOW ME THE MONEY 4 이후 계속 연락을 주고받는 사이였던 것으로 보이고, 결국 그 이후 박재범이 설립한 하이어뮤직에 들어갔다.
                            </Card.Text>
                            <Link href="https://namu.wiki/w/%EC%8B%9D%EC%BC%80%EC%9D%B4" passHref>
                                <Button variant="primary">나무위키보기</Button>
                            </Link>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </>
    );
}