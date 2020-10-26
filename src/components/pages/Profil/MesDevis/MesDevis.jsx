import axios from 'axios';
import React, { useEffect} from 'react'


require ('./_mesdevis.scss');

export default function MesDevis() {
 
 
    const id = localStorage.getItem("user");
    const [devis, setDevis] = React.useState([]);

    
  useEffect(() => {
  
    const fetchDevis = async () => {
      const token = localStorage.getItem("token");
    
      if (token) {
        const result = await axios(`http://localhost:8060/api/devis/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(result.data);
        setDevis(result.data);
      }
    };
    fetchDevis();
  }, [id]);
  
  console.log(devis);
   
    return (

     <div className="mesdevis">

       {devis.map(devi=>
      
       <div className='mesdevis-mondevis'>
         <h4>Numéro de devis : {devi.id}</h4>
         <h2>Domaine: {devi.field}</h2>
         <h3>Ville : {devi.city}</h3>
      <hr />
       <p>Desciption : {devi.description}</p>
       </div>
        
        
        
        )}
          </div>
       
    );
}
