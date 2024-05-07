import React from 'react'

function Color(props) {

  const {colorData,setColor} = props
  return (
    <>
      <ul className='colors ps-0'>
        {
          colorData && colorData?.map((item, index) => {
            return(
              <li onClick={()=>setColor(item?._id)} key={index} style={{backgroundColor:item?.title}}></li>
            )
          }) 
        }
        </ul> 
    </>
  )
}

export default Color
