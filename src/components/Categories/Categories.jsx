import React from 'react'

function Categories({type,placeholder},ref) {
  return (
    <input type={type} ref={ref} placeholder={placeholder} />
  )
}
let retornValue=React.forwardRef(Categories)

export default retornValue