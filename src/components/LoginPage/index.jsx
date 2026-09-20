import { useState } from "react"
import { useNavigate } from "react-router"
import Cookies from 'js-cookie'

const LoginPage = () => {
    const [username, setUsername] = useState("")
    const [password, setPassWord] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
    const [showErrorMsg, setShowErrorMsg]= useState(false)
    const navigate = useNavigate()
    const UsernameInput = (event) => {
        setUsername(event.target.value)
    }
    const PasswordInput = (event) => {
        setPassWord(event.target.value)
    }
    const renderUsername = () => (
        <>
        <label htmlFor="username">USERNAME</label>
        <input type="text" value={username} onChange={UsernameInput} placeholder="enter your username"/>
        </>
        
    )
    const renderPassword = () => (
        <>
        <label htmlFor="Password">PASSWORD</label>
        <input value={password} onChange={PasswordInput} type="password" placeholder="enter password"/>
        </>

    )
    const Success = jwtToken => {
        Cookies.set('jwt_token', jwtToken , {expires:1})
        navigate('/',{replace:true})

    }
    const failure = errorMsg => {
      setErrorMsg(errorMsg)
      setShowErrorMsg(true)
    }
    const submitForm =  async event => {
        event.preventDefault()
        const userDetails = {username,password}
        const jwtToken = Cookies.get('jwt_token')
        const url = 'https://apis.ccbp.in/login'
         const options = {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                Authorization: "Bearer " + jwtToken
            },
            body: JSON.stringify(userDetails)
         }
         const response =  await fetch(url,options)
         const data = await response.json()
         if(response.ok===true){
            Success(data.jwt_token)
         }else{
            failure(data.error_msg)
         }
    }
    return (
       <>
       <form onSubmit={submitForm}>
        <div>{renderUsername()}</div>
       <div>{renderPassword()}</div>
       <button>Submit</button>
       {showErrorMsg && <p>{errorMsg}</p>}
       </form>
       </>
    )
}
export default LoginPage