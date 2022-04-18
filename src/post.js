import { useEffect, useState } from 'react'
import './App.css'
export default function Post(props) {



    const [items, setItems] = useState([]);
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then((result) => {
             setItems(result);
           },
          
        )
    }, []);

    // const data={"title":"I am from child "};

  
    return (
      <div>
        <button 
         className='button'
         onClick={() => {
            props.AppAlert(items);
          }}   >Click To send data to parent</button>
      </div>
    );
  }
  


 