import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [resourceType, setResourceType] = useState('posts');
  const [data,setData] = useState([]);

  // call on render
  useEffect(()=>{
    console.log('render')
  })
  //call on mount
  useEffect(()=>{
    console.log('on mount')
  },[])
  //call on resourceType state change
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(response => response.json())
    .then(json => setData(json))
  },[resourceType])

  
  return (
    <>
      <p>{resourceType}</p>
      <button onClick={()=>setResourceType('posts')}>Posts</button>
      <button onClick={()=>setResourceType('users')}>Users</button>
      <button onClick={()=>setResourceType('comments')}>Comments</button>
      {data.map(data=>{
        return <pre>{JSON.stringify(data)}</pre>
      })}
    </>
  );
}

export default App;
