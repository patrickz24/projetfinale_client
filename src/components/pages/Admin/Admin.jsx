import axios from 'axios';
import React, { useEffect} from 'react'


require ('./_admin.scss');

export default function Admin() {
 
 
    const id = localStorage.getItem("user");
    const [devis, setDevis] = React.useState([]);

    
  useEffect(() => {
  
    const fetchDevis = async () => {
      const token = localStorage.getItem("token");
    
      if (token) {
        const result = await axios(`http://localhost:8060/api/devis/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(result.data);
        setDevis(result.data);
      };
    };
    fetchDevis();
  }, [id]);
  
  console.log(devis);
   
    return (

     <div className="admin">

       {devis.map((devi, i)=>
      
       <div className='admin-mondevis'>
         <h4 key= {i}>Numéro de devis : {devi.id}</h4> 
          <h2 >Client: { devi['User.first_name']}   { devi['User.last_name']}</h2>
       <h2>Email: {devi['User.email']}</h2>
         <h2>Domaine: {devi.field}</h2>
         <h3>Ville : {devi.city}</h3>
      <hr /> 
       <p>Desciption : {devi.description}</p>
       {/* <button>Répondre</button> */}
       </div>
        
        
        
        )}
          </div>
       
    );
}
