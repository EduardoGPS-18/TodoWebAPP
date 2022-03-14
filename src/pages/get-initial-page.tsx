import { useEffect } from "react"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"

export default function GetInitialPage() {
  const [cookies] = useCookies(['token'])
  const navigateTo = useNavigate()
  
  useEffect(() => {
    if(cookies.token) {
      navigateTo('/home')
    } else {
      navigateTo('/login')
    }
  }, [])

  return <>
    <div style={{color: 'black'}}>Initial</div>
  </>
}