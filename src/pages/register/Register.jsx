import { FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa6";
import google  from '../../assets/icons/google.png'
import { Link, useNavigate } from "react-router-dom";
import NavberLogin from "../../shared/Navber/NavberLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
    const {createUser,updateUserProfile,createGoogleAccount} = useContext(AuthContext);
    const [showpassword, setShowPassword] = useState(false);
    const [confirmShowpassword, setConfirmShowPassword] = useState(false);
    const navigate = useNavigate()

    const handleGoogleLogin = ()=>{
        createGoogleAccount()
        .then(res =>{
            console.log(res.user);
            toast.success('Google login success !')
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

    const handleRegister = e =>{
        e.preventDefault();
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        console.log(firstName, lastName, email, password, confirmPassword);

        //validation
        if(firstName === lastName){
            toast.error('Please provide me a different first name or last name');
            return;
        }
        else if(password.length < 6){
            toast.error("Please password provide a minimum 6 charecter !");
            return;
        }
        else if(password !== confirmPassword){
            toast.error('Please confirm your password !');
            return;
        }

        //updateptofile
        // updateUserProfile({
        //     displayName: firstName,
        //     // photoURL: "https://example.com/jane-q-user/profile.jpg"
        // })
        // .then(()=> console.log('update profile'))
        // .catch(error => toast.error(error.message))


        //create user with firebase
        createUser(email, password)
        .then( res => {
            updateUserProfile(firstName)
            .then(() => {
                toast.success('User created successfully');
                navigate('/')
                console.log(res.user);

            })
        })
        .catch(error =>{
            // console.log(error);
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
          <form onSubmit={handleRegister} className="border rounded shadow-md p-10 w-full space-y-5">
            <h2 className="text-3xl font-semibold text-center">Register</h2>
            <input
              className="outline-none w-full border-b border-gray-500"
              placeholder="First Name"
              type="text"
              name="firstName"
              required
            />
            <br />
            <input
              className="outline-none w-full border-b border-gray-500"
              placeholder="Last Name"
              type="text"
              name="lastName"
              required
            />
            <br />
            <input
              className="outline-none w-full border-b border-gray-500"
              placeholder="Email"
              type="email"
              name="email"
              required
            />
            <br />
            <div className="relative">
            <input
              className="outline-none w-full border-b border-gray-500"
              placeholder="Password"
              type={showpassword ? 'text' : 'password'}
              name="password"
              required
            />
            <span className="absolute right-2" onClick={()=> setShowPassword(!showpassword)}>{showpassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
            </div>
            <br />

           <div className="relative">
           <input
              className="outline-none w-full border-b border-gray-500"
              placeholder="Confirm Password"
              type={confirmShowpassword ? 'text' : 'password'}
              name="confirmPassword"
              required
            />
            <span className="absolute right-2" onClick={()=> setConfirmShowPassword(!confirmShowpassword)}>{confirmShowpassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
           </div>

      
            <input
              className="bg-[#F9A51A] py-2 rounded-md font-semibold w-full"
              type="submit"
              value="Register"
            />
            <p className="font-medium text-center">
              Already have an account ? {""}
              <Link to="/login" className="text-[#F9A51A]">
                Login
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
}
 
export default Register;