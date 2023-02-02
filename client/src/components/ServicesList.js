import React,{useState} from 'react'
import { Service } from './Service'

export const ServicesList = () => {
    const [service,setService]= useState([{name:'Plumber'},{name:'Plumber'},{name:'Plumber'},{name:'Plumber'},{name:'Plumber'},{name:'Plumber'}])
  return (
    <div>
       {service.map((item)=> {
        return <Service item={item.name}/>
       })}
    </div>
  )
}
