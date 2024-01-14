import React, {useState} from 'react'
import {Card,CardTitle,TabContainer,Row,Col,Input,Label} from 'reactstrap'
import data from "../data/jogaodres"
import jogadores from '../data/jogaodres'


export default function Filtro({changeList,list,blockList}){
    const [search, setSearch] = useState({active:false,value:''})
    const [idade, setIdade] = useState({active:false,value:''})
    const [lane, setLane] = useState({active:false,value:''})
    const [nacionalidade, setNacionalidade] = useState({active:false,value:''})


    function handleChange(event)
{
   const {name,value} = event.target

   if(name === 'search')
   {
       if(value === '')
       {
           setSearch({active:false,value:''})
       }
       else
       {
           setSearch({active:true,value:value})
       }
   }
   else if(name === 'idade')
   {
       if(value === '')
       {
           setIdade({active:false,value:''})
       }
       else
       {
           setIdade({active:true,value:Number(value)})
       }
   }
   else if(name === 'lane')
   {
       if(value === '')
       {
           setLane({active:false,value:''})
       }
       else
       {
           setLane({active:true,value:value})
       }
   }
   else if(name === 'nacionalidade')
   {
       if(value === '')
       {
           setNacionalidade({active:false,value:''})
       }
       else
       {
           setNacionalidade({active:true,value:value})
       }
   }
  
}

    function applyFilters(name,value)
    {
        
        let newList = jogadores
        
        if(search.active)
        {
            newList = newList.filter((player) => player.nome.toLowerCase().includes(search.value.toLowerCase()))
        }
        if(idade.active)
        {
            newList = newList.filter((player) => player.idade < idade.value)
        }
        if(lane.active)
        {
            newList = newList.filter((player) => player.lane === lane.value)
        }
        if(nacionalidade.active)
        {
            newList = newList.filter((player) => player.nacionalidade === nacionalidade.value)
        }

        if(!search.active && !idade.active && !lane.active && !nacionalidade.active)
        {
            newList = jogadores
        }
        
        changeList(newList)
        
    }

    function handleSubmmit(event)
    {
        event.preventDefault()
        if (search.active || idade.active || lane.active || nacionalidade.active) {
            applyFilters()
        }
        else if(!search.active && !idade.active && !lane.active && !nacionalidade.active)
        {
            changeList(data)
        }
       
    }
   

    return(
    <>
    <Card color='success' className='mt-3 p-2'>
        <CardTitle tag='h3' style={{color:"#fff"}}>Filtros</CardTitle>
        <Row>
           <Col md={2}>
                <input type="text" name="search" onChange={handleChange} placeholder="Pesquisar por nome"/>
           </Col>
           <Col md={2}>
                <input type="number" name="idade" onChange={handleChange} placeholder="Idade Maxima"/>
           </Col>
            <Col md={3} >
            <Input
                id="exampleSelect"
                name="lane"
                type="select"
                onChange={handleChange}
            >
                    <option value="">Pesquisar por lane</option>
                    <option value="top">Top</option>
                    <option value="jungle">Jungle</option>
                    <option value="mid">Mid</option>
                    <option value="adc">Adc</option>
                    <option value="sup">Sup</option>
                </Input>

            </Col>
            <Col md={3} >
            <Input
                
                name="nacionalidade"
                type="select"
                onChange={handleChange}
            >
                    <option value="">Pesquisar por Nacionalidade</option>
                    <option value="BR">Regiao Brasileira(BR)</option>
                    <option value="KR">Koreia(KR)</option>
                    <option value="EUW">Europa(EUW)</option>
                   
                </Input>

            </Col>
            <Col md={2}>
                <button className='btn btn-primary' onClick={handleSubmmit}>Aplicar</button>
            </Col>
           
        </Row>
    </Card>
    </>
    )

}