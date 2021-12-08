import {useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import AddCompo from './Components/AddCompo';
import EditCompo from './Components/EditCompo'
import One from './Components/One' 
import { BrowserRouter,Switch,Link,Route } from 'react-router-dom';

// import './App.css';

function App() {
  const [rdata,setRdata] = useState([])
    const selector = useSelector((state)=>state.ItemReducer.data)
    console.log('selector: ', selector)
  const dispatch = useDispatch()
useEffect(() => {
    setRdata([...selector])
    console.log('in useEffect : ',selector)
}, [selector])
const handleAdd =(e)=>{
  dispatch({
    type: "AddData",
    data : [e,...rdata],
  })
  
  }
  const handleDelete=(e)=>{
     const res = rdata.filter((item)=>item !== e)
     setRdata([...res])
  }
  
 
  return (
    <div className="App">
   
    <BrowserRouter>
      <div style={{padding:'0 100px'}}>
      <Link  to='/'></Link>
       </div>
    <Switch>
      <Route path='/add'  ><AddCompo  handleAdd={handleAdd}/></Route>
      <Route path='/edit/:id' ><EditCompo  /></Route>
      <Route  path='/' ><One data={rdata} handleDelete={handleDelete}/></Route>
    </Switch>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
