import { useNavigate } from 'react-router-dom';
import styles from './index.module.css';


export default function Profile() {
    const navigate = useNavigate();
    return(
        <div className={`col-12 d-flex flex-column justify-content-center align-items-center h-100 gap-2 ${styles.Profile}`}>
            <h1>Welcome To Profile</h1>
            <button onClick={() => {navigate('/login')}}>Log Out</button>
        </div>
        
    )
}