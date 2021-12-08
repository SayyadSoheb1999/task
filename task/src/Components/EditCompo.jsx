import React,{useState} from 'react'
import {Form,FormControl} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function EditCompo() {
    const [input, setInput] = useState({title:'',desc:'',exp:''})
    const handleEdit=(e)=>{
            console.log('helloweee')
    }
    return (
        <div>
            <h1>Edit Component</h1>
            <div style={{margin:'30px'}}>
       <Form.Label>Title</Form.Label>
        <FormControl type="text" onChange={(e)=>setInput({...input,title:e.target.value})}/>
        <Form.Label>Description</Form.Label>
        <FormControl as="textarea" rows={3} onChange={(e)=>setInput({...input,desc:e.target.value})}/>
        <Form.Label>Experience</Form.Label>
       <FormControl type="text" onChange={(e)=>setInput({...input,exp:e.target.value})}/>
       <br/>
       <Link style={{marginLeft:'600px'}} to='/'  onClick={()=>{input.title.length>0 && input.desc.length>0 && input.exp.length>0  ? handleEdit(input) : console.log('required') }} className='btn btn-success'>Edit</Link>
      
        </div>
        </div>
    )
}

export default EditCompo
