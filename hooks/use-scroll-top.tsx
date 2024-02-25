import React, { useEffect, useState } from 'react'

export function useScrollTop(threshold=10) {
 
  const [scrolled,setScrolled]=useState(false)

 
  const handleScroll=()=>{
    if(window.scrollY > threshold){
      setScrolled(true)
    }
    else{
      setScrolled(false)
    }
  }

  useEffect(() => {
     window.addEventListener("scroll",handleScroll)
    return () => window.removeEventListener("scroll",handleScroll)
  }, [])
  

  return scrolled
}
