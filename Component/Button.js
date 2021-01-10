import React, { useEffect, useState } from 'react'
import Info from './Info'
const Button = ({data}) => {
    const [datas,setDatas]= useState(data)
    const [value,setValue]=useState(1)
   
    const handleChange = (index) =>{
        setValue(index)
    }
console.log(datas[value])
    return (
        <div>
        <div style={{display:'flex', justifyContent:'space-evenly',paddingTop:'35px'}}>
            {
                datas.map((item,index)=>{
                    const {id,name} =item
                    return(
                        <div key={item.id}>
                          <button 
                             onClick={()=>handleChange(index)}
                             className={`btn-hover ${index === item.index && 'btn-click'}`}
                             key={id}
                          >
                              {name}
                          </button>
                        </div>
                    )
                })
            }
        </div>
        {/* without [datas[value]] third braces it shows error datas.map is not a function */}
           {/* its an array */}
           {/* {id: 1, name: "JavaScript Developer", info: "[company name]  */}
           {/* array will not place into curley braces as its an obect syntax thats why i use [] */}
            <Info datas={[datas[value]]}/>
        </div>
    )
}

export default Button
