import { useEffect, useState } from "react"
const useExpert=()=>{

const [expert,setExpert]=useState([])
useEffect(()=>{
  fetch('experts.json')
 .then(response =>response.json())
 .then(data=>setExpert(data))
},[])
return   [expert,setExpert]
}
export default useExpert;