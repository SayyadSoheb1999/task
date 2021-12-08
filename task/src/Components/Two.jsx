import Button from '@restart/ui/esm/Button'
import React from 'react'
import {Link} from 'react-router-dom'
import {Col,Row} from 'react-bootstrap'
function Two({item, handleDelete}) {
    return (
        <div style={{border:'1px solid black',margin:'20px 50px',padding:'5px 10px'}}>
          
            <div style={{marginLeft:'10px'}}>
            <h1 >{item.title}</h1>
            <p>{item.desc}</p>
            <p>{item.exp}</p>
            <Row>
                <Col></Col>
                <Col xs={2}><Link className='btn btn-success' style={{borderRadius:'0',padding:'5px 30px'}} to={`/edit/${item.desc}`}>Edit</Link></Col>
                <Col xs={1}><Button className='btn btn-danger' style={{borderRadius:'0'}} onClick={()=>handleDelete(item)}>Delete</Button></Col>
                
            </Row>


            </div>
       
            
        </div>
    )
}

export default Two
