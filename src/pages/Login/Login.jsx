import { Link, useNavigate } from "react-router-dom";
import Navber from "../../shared/Navber/NavberHome";
import NavberLogin from "../../shared/Navber/NavberLogin";
import { FaFacebook } from "react-icons/fa6";
import google  from '../../assets/icons/google.png'
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
const Login = () => {
    const {signIn,createGoogleAccount} = useContext(AuthContext);
    const navigate = useNavigate()
     //! signIn with google
     const handleGoogleLogin = ()=>{
      createGoogleAccount()
      .then(res =>{
          console.log(res.user);
          toast.success('Google login success !');
          navigate('/userAccount')
      })
      .catch(error => {
          toast.error(error.message)
          console.log(error);
      })
  }

  //!facebook login
  const handleFaceBookLogin = ()=>{
    toast('Facebook login coming soon...⌛')
  }

    const handleLogin = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;
        console.log(email, password, terms);
        //validation
        if(password.length < 6){
          toast.error('Please Provide me a minimum 6 character password!');
          return;
        }
        else if(!terms){
          toast.error('Please check your terms !');
          return;
        }

        //signIn with firebase
        signIn(email, password)
        .then(res =>{
            console.log(res.user);
            toast.success('Login Success')
            navigate('/userAccount')
        })
        .catch(error => {
            toast.error(error.message)
        })

       
    }
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <NavberLogin></NavberLogin>
      </div>
      <div className="flex justify-center">
        <div >
          <form onSubmit={handleLogin} className="border rounded shadow-md p-10 w-full space-y-5">
            <h2 className="text-3xl font-semibold text-center">Login</h2>
            <input
              className="outline-none w-full border-b border-gray-500"
              placeholder="Email"
              type="email"
              name="email"
              required
            />
            <br />
            <input
              className="outline-none w-full border-b border-gray-500"
              placeholder="Password"
              type="password"
              name="password"
              required
            />

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <input type="checkbox" name="terms" id="" />
                <p className="font-semibold">Remember Me</p>
              </div>
              <Link className="text-[#F9A51A]">Forgot Password? </Link>
            </div>
            <input
              className="bg-[#F9A51A] py-2 rounded-md font-semibold w-full"
              type="submit"
              value="Login"
            />
            <p className="font-medium text-center">
              Don't have an account ?
              <Link to="/register" className="text-[#F9A51A]">
                Register
              </Link>
            </p>
          </form>
          <div className="divider">OR</div>
          <div className="px-5">
           <button onClick={handleFaceBookLogin} className="text-center btn btn-outline rounded-full normal-case w-full text-xl"><FaFacebook className="text-2xl text-blue-800"></FaFacebook>  Continue with facebook</button>
            <button onClick={handleGoogleLogin} className="btn btn-outline rounded-full normal-case w-full  text-xl mt-5"><img className="w-[25px]" src={google} alt="" />  Continue with Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
