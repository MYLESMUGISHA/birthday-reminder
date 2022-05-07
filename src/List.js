import React from 'react';


const List = (changeData) => {
const{receivedData}=changeData


  return (
    <>
{receivedData.map((person) => {
const{id,name,age,image}= person
  return(
<section>
<section className='person' key={id}>
  <img src={image}></img>
  <div>
  <h4>{name} </h4>
  <p>{age}</p>

  </div>
  
</section>
 

</section>


  )

}    
        
  )
}
</>
)
}

export default List;
