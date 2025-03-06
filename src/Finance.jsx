import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Finance = () => {
    const [finance,setFinance]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:4000/financeexperts")
        .then((res)=>{
            setFinance(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    })
  return (
    <>
       <div>
        {
            finance.map((data)=>{
                return(
                   <div>
                     <h1>{data.name}</h1>
                     <h1>{data.qualification}</h1>
                   </div>
                )
            })
        }
       </div>
    </>
  )
}

export default Finance
