import React from 'react'
import useFetch from '../Hooks/useFetch'
import  Loader  from './Loader'
import useTimeout from '../Hooks/useTimeout'

const DeginationData = ({value}) => {
    let  page
    if(value === 'Regions'){
        page = 'regions'
    }else if(value === 'Cities'){
        page= 'cities'
    }else{
        page = 'interests'
    }
    const {loading,data,error} = useFetch(`http://localhost:3001/${page}`);
    return (
        <div>
            {
            loading?<div  style={{width:"50px",margin:"50px auto"}}><Loader/></div>:
            <div style={{marginTop:"-10px",display:"grid",gridGap:"20px",gridTemplateColumns:"auto auto auto auto"}}>
                    {data.map((el)=>{
                        return <div key={el.name}  style={{marginBottom:"-33px",padding:"0"}}>
                            <p style={{color:"#4A9AD4",marginBottom:"-12px",fontSize:"15px"}}>{el.name}</p>
                            <p  style={{color:"#A5A5A5",fontSize:"14px"}}>{el.properties}</p>
                        </div>
                    })}
            </div>
            }
            
        </div>
    )
}

export default DeginationData
