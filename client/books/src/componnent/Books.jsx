import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


function Books() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:7070/books');
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, []);



  const handleDelete = (id) => {
    fetch(`http://localhost:7070/books/${id}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (response.ok) {
        setData(data.filter(item => item.id !== id));
      } else {
        console.log('Error deleting book');
      }
    })
    .catch(error => console.log(error));
  };



  return (
    <div>
      {data.map(item => (
       <div className="card"  style={{ width: "18rem" }}>
       <img src="..." className="card-img-top" alt="..."/>
       <div key={item.id} className="card-body">
         <h5 className="card-title">{item.title}</h5>
         <p className="card-text">{item.descrip}</p>
         <button  className="btn btn-danger" onClick={() => handleDelete(item.id)}>delete</button>  
         <button className="btn btn-primary" onClick={()=> (item)}>update</button> 
       </div>
     </div>
      ))}
    </div>
  );
}

export default Books;



