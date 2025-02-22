import { useNavigate } from 'react-router-dom';
import imgFront from './imgFront.webp';
import styles from './index.module.css';

export default function ErrorPage(){
    const login = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        login('/Login')
    }

    return(
        <div className={`col-12 d-flex flex-column justify-content-center align-items-center ${styles.errorPage}`}>
            <img className={`col-12 col-md-6 ${styles.photo}`} src={imgFront} alt="" />
            <div className={`d-flex flex-column justify-content-center align-items-center ${styles.text}`}>
                <h3>No Navbars here</h3>
                <p>The navbar you are looking for doesn’t exist or has been moved. Continue your search for the perfect navbar from the homepage.</p>
                <hr />
                <button onClick={handleLogin}><span>Back To Home</span></button>
            </div>
        </div>
    )
}