import { Link  } from 'react-router-dom'
import Two from './Two'

function One({data,handleDelete}) {
  
    return (
        <div>
           
           <Link style={{position:'relative',left:'600px',top:'10px'}} className='btn btn-success' to='/add'>Add</Link>
            {data.map((item)=>{
                return <Two item={item} handleDelete={handleDelete}/>
            }
           )}
        </div>
    )
}

export default One
