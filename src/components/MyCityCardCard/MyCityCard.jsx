import React from 'react'
import "./MyCityCard.css"
export default function MyCitiesCard(props) {

  let {name,img,id,event1,  event2, go }=props  

  let listen=(e)=>{
    event1(id,e)
  }

  let listenEdit=(e)=>{
    event2(id,e)
    go(id)
  }

  return (
    
    <div className="My-Card">
        <h3 onClick={listenEdit} className='option-mycities-edit'>Edit</h3>
            <div className='containerImage-mycities'>
              <img src={img} className='image-mycities' alt={name} />
            <h4 className='name-mycities'>{name}</h4>
            <h3 onClick={listen} className='option-mycities-delet'>Delete</h3>
            </div>
    </div>
  )
}