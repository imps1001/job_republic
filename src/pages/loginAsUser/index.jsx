import image from "../../assets/login_img.png";
import {Link} from "react-router-dom";
const LoginForUser = () => {
   return(
       <>
   <div className="min-h-100 p-3" style={{ backgroundColor: "white" }}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full h-3/6 lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center ">
            <img src={image} alt="Login image" className="h-2/6 w-5/6" />
            
            </div>
          <div className="w-full lg:w-1/2 py-10 px-12 flex flex-col bg-white p-12  justify-center h-fit">
            <h2 className="text-3xl mb-4">Sign In</h2>
            <p className="mb-4">
              Don't have an account? <Link to="/signup" className="text-[#5BB85C]">Sign Up</Link> now!
            </p>
            <form action="#">
              
              <div className="mt-5">
                <label > Enter Email
                <input type="text" placeholder="Enter your Username" className="border border-gray-500 py-1 px-2 rounded-md h-14 bg-gray-100 w-full" />
                </label>
              </div>
             <div className="mt-5">
                <label > Enter Password
                <input type="text" placeholder="Enter your Password " className="border border-gray-500 py-1 px-2 rounded-md h-14 bg-gray-100 w-full" />
                </label>
              </div>
              <div className="mt-5">
                <input type="checkbox" className="border border-gray-400" />
                Remember Me?
                <span className="float-right">
                  <a href="#" className="text-[#5BB85C]">Forgot Password?</a>
                </span>
              </div>
              <div className="mt-5">
                <button className="w-full bg-[#5BB85C] py-3 text-center text-white rounded-md"> Sign In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
    );
};

export default LoginForUser;