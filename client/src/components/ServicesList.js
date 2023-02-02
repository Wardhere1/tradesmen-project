import React,{useState} from 'react'
import { Service } from './Service'

export const ServicesList = ({servicesData}) => {
    // const [service,setService]= useState([{name:'Plumber'},{name:'Plumber'},{name:'Plumber'},{name:'Plumber'},{name:'Plumber'},{name:'Plumber'}])
  return (
    <div>
       {servicesData.map((item)=> {
        return <Service item={item}/>
       })}
    </div>
  )
}
