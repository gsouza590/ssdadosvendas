import "./style.css"
import logo from '../../assets/logo.svg'

function Header(){
return(
<>
    <header>
        <div className="ss-logo-container">
            <img src={logo}></img>
            <h1> SSystem</h1>
        </div>
    </header>
</>

)
}

export default Header