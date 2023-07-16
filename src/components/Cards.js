import React,{useEffect, useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { fetchData } from '../actions/imageAction';
import '../App.css';

function Cards() {
    let loading = useSelector((state) => state.loading); //use selector is to get the data from store
    let data = useSelector((state) => state.data.data);
    let error = useSelector((state) => state.error);

    let dispatch = useDispatch();
    let [name,setName] = useState('');
    console.log('in cards',data);

    useEffect(()=>{
        dispatch(fetchData()); //fetch api data
    },[])

    if(loading) return <h1>The page is loading ...</h1> //during loading
    if(error) return <h1>{error}</h1> //if error occurs

    let filtered;
    if(data) filtered = data.filter((element)=>element.first_name.includes(name)); //filter the data based on the input search

  return (
    <>
        {/*search for employee and used use state to track the input entered */}
        <input 
            type='text' 
            placeholder='Search Employee by First Name' 
            className='search'
            value={name}
            onChange={(e)=>setName(e.target.value)}
        />
        <ul className='list'> {/*listview of employee's details*/}
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
