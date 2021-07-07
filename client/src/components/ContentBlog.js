import React, { Component } from 'react'
import { Row, Col, Card } from 'react-materialize'

const ContentBlog = props => {
    return (
        <div className="content-blog">
            <Row>
                <Col
                    m={6}
                    s={12}
                >
                    <Card
                    actions={[
                        <a key="1" href="#">This is a link</a>,
                        <a key="2" href="#">This is a link</a>
                    ]}
                    className="blue-grey darken-1"
                    textClassName="white-text"
                    title={props.posts.titulo_postagem}
                    >
                    <p>{props.posts.conteudo_postagem}</p>
                    <p>{props.posts.autor_postagem}</p>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ContentBlog