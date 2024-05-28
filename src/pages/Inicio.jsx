import {Link, useNavigate} from 'react-router-dom'
import logo from '../assets/react.svg'
import '../App.css'
 
const Inicio = () => {
 
    return (
        <div>
            <Link to='/inicio'>
                <img className='img-fluid' src={logo}
                alt='logo'></img>
            </Link>
        </div>
    )
 
}
 
export default Inicio