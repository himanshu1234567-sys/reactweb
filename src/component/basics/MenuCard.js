import React from 'react'

const MenuCard = ({menuData}) => {
  return (
    <>
    <section className='main-card--cointainer'>
    {
        menuData.map((curElem)=>{
            const{id,name,category, image,description }=curElem;
            return (<>
             <div className='card-container' key={id}>
            <div className='card' >
              <div className='card-body'>
                <span className='card-number card-circle subtle'>{id} </span>
                <span className='card-author  subtle' style={{color: "red"}}>{name} </span>
                <h2 className='card-title'>{curElem.name}</h2>
                <span className='class-description subtle'>
                {curElem.description}
                </span>
                 </div>
                   <div className='card-read'>Read</div>
            
            <img src={image} alt="images" className='card-media' />
            <span className='card-tag subtle'>order</span>
            </div>
          </div>
          </>)
        })
    }
      
    </section>
    </>
  )
}

export default MenuCard
