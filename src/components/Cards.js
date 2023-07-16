import React,{useEffect, useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { fetchData } from '../actions/imageAction';
import '../App.css';

function Cards() {
    let loading = useSelector((state) => state.loading);
    let data = useSelector((state) => state.data.data);
    let error = useSelector((state) => state.error);

    let dispatch = useDispatch();
    let [name,setName] = useState('');
    console.log('in cards',data);

    useEffect(()=>{
        dispatch(fetchData());
    },[])

    if(loading) return <h1>The page is loading ...</h1>
    if(error) return <h1>{error}</h1>

    let filtered;
    if(data) filtered = data.filter((element)=>element.first_name.includes(name));

  return (
    <>
        <input 
            type='text' 
            placeholder='Search Employee by First Name' 
            className='search'
            value={name}
            onChange={(e)=>setName(e.target.value)}
        />
        <ul className='list'>
        {filtered && filtered.map((element,idx)=>{
            return <li key={idx}>
                    <div  className='card'>
                        <div className='index'>{element.id}</div>
                        <img className='image' src={element.avatar} alt='avatar'/>
                    </div>
                    <br/>
                    <p>{element.first_name}</p>
            </li>
        })}
        </ul>
     </>
  )
}

export default Cards
