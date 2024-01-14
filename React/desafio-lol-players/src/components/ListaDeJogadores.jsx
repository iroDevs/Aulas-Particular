import React from 'react'
import {Card,CardTitle,TabContainer,Row,Col,Input,Label,Container} from 'reactstrap'

export default function ListaDeJogadores({list,blockList,ChangeList}){

    return (
        <Container className='mt-2'>
            <Row>
                {
                    list.length === 0 ? <h1>Nenhum jogador encontrado</h1> : null
                }
                {
                    list.map((item,index)=> {
                        return (
                            <Col md={3} className='mt-1 mb-1'>
                                <Card body>
                                    <CardTitle>{item.nome}</CardTitle>
                                    <p>Idade:{item.idade}</p>
                                    <p>Posição:{item.lane}</p>
                                    <p>Nacionalidade:{item.nacionalidade}</p>
                                    
                                </Card>   
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}