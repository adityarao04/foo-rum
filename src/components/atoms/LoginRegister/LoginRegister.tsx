import { AuthContext } from "Auth/auth-context";
import { FC, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, resetAuthState, signupUser } from "state/ducks/auth";
import { RootState } from "state/ducks/root-reducer";
import { validateEmail } from "Utils/helpers/misc";

type LoginRegisterProps = {
}

const LoginRegister: FC<LoginRegisterProps> = ({ }) => {



    const [login, setLogin] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const context = useContext(AuthContext);
    const dispatch = useDispatch<any>();
    const loginUserState = useSelector((state: RootState) => state.auth);


   useEffect(() => {
    if(loginUserState.error) {
        setError(loginUserState.error);
    }
   }, [loginUserState.error]);

   useEffect(() => {
    if(loginUserState.isAuthenticated) {
        dispatch(resetAuthState());
        context.setIsAuthenticated(true);
        setError(null);
       window.location.href = '/';
    }
   }, [loginUserState.isAuthenticated]);

    const [ formData, setFormData ] = useState<{
        email: string;
        password: string;
        retypePassword: string;
    }>({
        email: '',
        password: '',
        retypePassword: '',
        
    });


 const handleLogin = async () => {
    setError(null);
    if(formData.email === '' || formData.password === '') {
        setError('Please enter a valid email and password');
        return;
    }

    // if(formData.password !== formData.retypePassword) {
    //     setError('Passwords do not match');
    //     return;
    // }

    if(!validateEmail(formData.email)){
        setError('Please enter a valid email');
        return;
    }


    try{
        // const result = await dispatch(loginUser(formData.email, formData.password, false));
       
      dispatch(loginUser(formData.email, formData.password, false));
    }catch(error){
        console.log("error", error);        // setError(error as string);
        return;
    }
    
 }

 const handleSignUp = () => {
    setError(null);
    if(formData.email === '' || formData.password === '') {
        setError('Please enter a valid email and password');
        return;
    }
    if(formData.retypePassword === '') {
        setError('Please repeat the password');
        return;
    }
    if(formData.password  !== formData.retypePassword) {
        setError('Passwords do not match');
        return;
    }

    // if(formData.password !== formData.retypePassword) {
    //     setError('Passwords do not match');
    //     return;
    // }

    if(!validateEmail(formData.email)){
        setError('Please enter a valid email');
        return;
    }


    try{
        // const result = await dispatch(loginUser(formData.email, formData.password, false));
       
      dispatch(signupUser(formData.email, formData.password));
    }catch(error){
        console.log("error in signup", error);        // setError(error as string);
        return;
    }
 }



    return (
        <div className="w-full md:w-[498px] flex flex-col justify-center items-start bg-feed-bg rounded-xl mx-auto my-auto mt-8 p-2">
             <div className="w-full bg-white rounded-2xl px-2 py-4 border border-black/10 shadow-feed-content flex flex-col justify-center items-center">
             <div className="bg-[#F8F8F8] rounded-full h-[53px] w-[53px] flex justify-center items-center">
             <img src='/images/log-in-2.svg' alt="logo" />
             </div>
             {!!login ? 
             <>
             <div className="font-bold text-xl mt-6">Sign in to continue</div>
             <div className="font-normal text-sm text-[#0000007A] mt-2">Sign in to access all the features on this app</div> 
             </>
              
            :  <>
            <div className="font-bold text-xl mt-6">Create an account to continue</div>
            <div className="font-normal text-sm text-[#0000007A] mt-2">Create an account to access all the features on this app</div>
            </> }

           <div className="mt-[5rem] w-full px-[3rem]">

            <div className="mb-4">
                <label htmlFor="email" className="flex flex-col gap-1">
                     <span className="text-sm font-semibold">
                     Email or username
                        </span> 
                    <input className="text-[#0000007A] text-sm placeholder-[#0000007A] bg-[#F4F4F4] rounded-xl px-4 py-2"
                    type="email" name="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </label>
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="flex flex-col gap-1">
                <span className="text-sm font-semibold">
                   Password
                   </span> 
                    <input className="text-[#0000007A] text-sm placeholder-[#0000007A] bg-[#F4F4F4] rounded-xl px-4 py-2" 
                    type="password" name="password" placeholder="Password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                </label>
            </div>
            {!login ? <>
                <div className="mb-4">
                <label htmlFor="retypePassword" className="flex flex-col gap-1">
                <span className="text-sm font-semibold">
                   Repeat Password
                   </span> 
                    <input className="text-[#0000007A] text-sm placeholder-[#0000007A] bg-[#F4F4F4] rounded-xl px-4 py-2" 
                    type="password" name="retypePassword" placeholder="Repeat Password" value={formData.retypePassword} onChange={(e) => setFormData({ ...formData, retypePassword: e.target.value })} />
                </label>
            </div>
            </> : <></>}

           <button className="w-full bg-[#5057EA] text-white text-sm font-semibold rounded-xl p-3 mt-4" onClick={login ? handleLogin : handleSignUp}>
            {login ? 'Sign in' : 'Sign up'}
           </button>
           </div>

          {!!error && <div className="text-red-500 text-sm">{error}</div>}
           
             </div>
             <div className="f-full flex justify-center items-center text-sm text-[#00000099] mx-auto my-4">
                {login ? <div className="flex justify-center items-center">
                    Do not have and account? <span className="ml-1 text-[#5057EA] cursor-pointer" onClick={() => setLogin(false)}>Sign up</span>
                </div> : <div className="flex justify-center items-center">
                    Already have an account? <span className=" ml-1 text-[#5057EA] cursor-pointer" onClick={() => setLogin(true)}>Sign in</span>
                    </div>}
             </div>
        </div>
    )
}

export default LoginRegister;