import { useRef } from 'react';
import styles from './index.module.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import { useLoader } from '../../Store';

export default function LoginPage(){
    const { open , close } = useLoader();
    const phoneInput = useRef();
    const codeInput  = useRef();
    const navigate   = useNavigate();

    const handleSubmit = (e) => {
        open();
        e.preventDefault();
        let data = {
            user_phone: phoneInput.current.value,
            user_code:  codeInput.current.value
        }
        let domainName = "https://support.israaosman.com";
        let endPoint   = "/php/index.php/api/auth/login";
        let url        = domainName + endPoint;
        axios.post(url, data).then((res) => {
            if(res.data.err){
                setTimeout(() => {
                    Swal.fire({
                        icon: "error",
                        title: "Wrong User Phone Or Code",
                        timer: 1500
                    }).then(() => {
                        close();
                    })
                },3000)
            } else {
                setTimeout(() => {
                    Swal.fire({
                        icon: "success",
                        title: "Login Success",
                        timer: 1500
                    }).then(() => {
                        close();
                        navigate('/');
                    })
                },3000)  
            }
        })
    }
    const handleGoogleLogin = () => {
        window.location.href = 'https://mail.google.com/';
    }
    const handleAppleLogin = () => {
        window.location.href = 'https://www.apple.com/';
    }

    return(
        <div className={`col-12 h-100 d-flex align-items-center justify-content-center ${styles.loginPage}`}>
            <form onSubmit={handleSubmit} className='col-10 col-md-4 rounded shadow p-5 gap-4 d-flex flex-column align-items-center'>
                <h2>Login</h2>

                <div className='col-12 d-flex gap-5 justify-content-center'>
                    <button className='d-flex align-items-center gap-1' onClick={handleGoogleLogin}> <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                                                    className="MuiBox-root css-0 iconify iconify--logos" width="0.98em" height="1em" viewBox="0 0 256 262">
                    <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" />
                    <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" />
                    <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z" />
                    <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" />
                    </svg> Login With Google</button>
                    <button className='d-flex align-items-center gap-1' onClick={handleAppleLogin}><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                                                    className="MuiBox-root css-lkda8o iconify iconify--uim" width="1em" height="1em" viewBox="0 0 24 24">
                    <path
                        fill="currentColor"
                        d="M17.458 12.625A4.52 4.52 0 0 1 19.62 8.82a4.67 4.67 0 0 0-3.658-1.984c-1.558-.158-3.04.917-3.829.917s-2.009-.894-3.3-.87a4.9 4.9 0 0 0-4.14 2.508c-1.762 3.06-.449 7.593 1.268 10.076c.84 1.214 1.843 2.581 3.158 2.532c1.268-.05 1.746-.82 3.277-.82s1.962.82 3.3.795c1.364-.025 2.229-1.239 3.062-2.457a11 11 0 0 0 1.385-2.845a4.42 4.42 0 0 1-2.685-4.047m-2.517-7.432A4.4 4.4 0 0 0 15.981 2a4.48 4.48 0 0 0-2.945 1.516a4.2 4.2 0 0 0-1.061 3.093a3.71 3.71 0 0 0 2.966-1.416"
                    />
                    </svg>Login With Apple</button>
                </div>

                <div className='col-12 d-flex justify-content-center gap-2'>
                    <hr />
                    <p>or Login with</p>
                    <hr />
                </div>
                
                <input ref={phoneInput} type="text" placeholder='Enter Phone Number' />
                <input ref={codeInput} type="text" placeholder='Enter Code' />

                <Link className={styles.link} to="*">Forget Code ?</Link>

                <button className={styles.sub}>Submit</button>

                <p>Dont have an account? <Link className={styles.link} to="*">Register</Link></p>
            </form>
        </div>
    )
}