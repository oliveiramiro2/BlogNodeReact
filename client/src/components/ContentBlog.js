import React from 'react'
import { Row, Col, Card } from 'react-materialize'


const ContentBlog = (props) => {
    return (    
        <div className="content-blog">
            <Row>
                <Col
                    m={12}
                    s={12}
                    id="#col-cards"
                >
                    {props.posts.map(
                        (posts, id) =>
                            <Card
                            key={id}
                            actions={[
                                <a key="1" href="#">This is a link</a>,
                                <a key="2" href="#">This is a link</a>
                            ]}
                            className="blue-grey darken-1"
                            textClassName="white-text"
                            title={posts.titulo_postagem}
                            >
                            <p>{posts.conteudo_postagem}</p>
                            <p>{posts.autor_postagem}</p>
                            </Card>
                    )}
                    
                </Col>
            </Row>
        </div>
        
    )
}



export default ContentBlog