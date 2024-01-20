import './App.css';

import {
  Card,
  CardTitle,
  CardText,
  Container,
  Row,
  Col,
 }from 'reactstrap';

function App() {

  let listaUsuario = [
    {
      nome: "João",
      idade: 20,
      email: "joao@email.com",
      filmesFavoritos: [
        "Vingadores",
        "Harry Potter",
        "Senhor dos Anéis"
      ]
    },
    {
      nome: "Maria",
      idade: 25,
      email: "maria@email.com",
      filmesFavoritos: [
        "Titanic",
        "Harry Potter",
        "Senhor dos Anéis"
      ]
    },
    {
      nome: "José",
      idade: 30,
      email: "jose@jose",
      filmesFavoritos: [
        "Vingadores",
        "Titanic",
        "Senhor dos Anéis"
      ]
    }
  ]
  function clicar(e){
    let classes = e.target.classList

    if (classes.contains("animate__animated animate__bounceIn")){ 
      classes.remove("animate__animated")
      classes.remove("animate__bounceIn")
      classes.add("animate__animated")
      classes.add("animate__bounceOut")
    }else{
      classes.remove("animate__animated")
      classes.remove("animate__bounceIn")
      classes.add("animate__animated")
      classes.add("animate__bounceIn")

      setTimeout(()=>{
        classes.remove("animate__animated")
        classes.remove("animate__bounceIn")
      },1000)

    }
  }
  return (
    <>
    {
      listaUsuario.map((usuario,index)=>{
        return(
          <Container key={index}>
            <Row>
              <Col>
                <Card body inverse color="primary" className="mt-5 animate__animated animate__bounceIn" onClick={clicar}>
                  <CardTitle tag="h5">{usuario.nome}</CardTitle>
                  <CardText>{usuario.idade} anos</CardText>
                  <CardText>{usuario.email}</CardText>
                  Favoritos
                  {
                    usuario.filmesFavoritos.map((filme,index)=>{
                      return(
                        <CardText key={index}>{filme}</CardText>
                      )
                    })
                  }
                </Card>
              </Col>
            </Row>
          </Container>
        )
      })
    }
    </>
  );
}

export default App;
