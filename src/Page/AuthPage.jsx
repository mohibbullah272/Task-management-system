import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import googleIcon from '../assets/icons8-google.svg'
import githubIcon from '../assets/icons8-github.svg'
import { useNavigate } from "react-router-dom";
const AuthPage = () => {
    const {   LoginWithGoogle,
        loginWithGithub}=useContext(AuthContext)
        const navigate = useNavigate()
        const handleGoogleLogin=()=>{
            LoginWithGoogle()
            .then(result=>{
                console.log(result)
                navigate('/')
            })
            .catch(err=>{
                console.log(err)
            })
        }
        const handleGithubLogin=()=>{
            loginWithGithub()
            .then(result=>{
                console.log(result)
            })
            .catch(err=>{
                console.log(err)
            })
        }
    return (
        <div className="min-h-screen flex flex-col justify-center items-center mx-auto">
            <h3 className="text-xl mb-4 font-semibold text-gray-700 ">Welcome  to  Task Management System !!</h3>
            <p class="font-semibold text-center text-gray-700">
  Log in now <br /> to experience an incredible journey.
</p>

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
      
        <div className="form-control mt-6">
          <button onClick={handleGoogleLogin} className="btn btn-outline"><img className="w-7 h-7" src={googleIcon} alt="" /> Login with Google</button>
          <div className="divider">Or</div>
          <button onClick={handleGithubLogin} className="btn btn-outline"><img className="w-7 h-7" src={githubIcon} alt="" /> Login with Github</button>
        </div>
      </div>
    </div>
        </div>
    );
};

export default AuthPage;