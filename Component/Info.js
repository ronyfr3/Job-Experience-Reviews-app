import React from 'react'

const Info = ({datas}) => {

    console.log(datas)
    return (
        <div>
            {
                datas.map((item)=>{
                    return(
                        <div
                           key={item.id}
                        >
                          <p>{item.info}</p>
                           <p>{item.candidateInfo.title}</p>
                           <p>{item.candidateInfo.years.year}</p>
                           <p>{item.candidateInfo.years.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Info
