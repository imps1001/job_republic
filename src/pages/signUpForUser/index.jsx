import image from "../../assets/login_img.png";
import {Link} from "react-router-dom";
const SignUpForUser = () => (
  <>
   <div className="min-h-100 p-3" style={{ backgroundColor: "white" }}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full h-3/6 lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center ">
            <img src={image} alt="Login image" className="h-2/6 w-5/6" />
            
            </div>
          <div className="w-full lg:w-1/2 py-10 px-12 flex flex-col bg-white p-12  justify-center h-fit">
            <h2 className="text-3xl mb-4">Register</h2>
            <p className="mb-4">
              Already have an account? <Link to="/login" className="text-[#5BB85C]">Login</Link> now!
            </p>
            <form action="#">
              <div className="grid grid-cols-2 gap-5">
                <label className="mt-5"> First Name
                <input type="text" placeholder="Enter your Firstname" className="border border-gray-500 bg-gray-100 py-1 px-2 rounded-md h-14" /> </label>
                <label className="mt-5"> Last Name
                <input type="text" placeholder="Enter your Lastname" className=" border border-gray-500 bg-gray-100 py-1 px-2 rounded-md h-14" />
                </label>
              </div>
              <div className="mt-5">
                <label > Email
                <input type="text" placeholder="Enter your Email" className="border border-gray-500 py-1 px-2 rounded-md h-14 bg-gray-100 w-full" />
                </label>
              </div>
               <div className="grid grid-cols-2 gap-5">
               <label className="mt-5"> Enter Password
                <input type="password" placeholder="Enter Password" className="border border-gray-500 py-1 px-2 rounded-md h-14 bg-gray-100" /> </label>
                <label className="mt-5"> Last Name
                <input type="password" placeholder="Enter Lastname" className="border border-gray-500 py-1 px-2 rounded-md h-14 bg-gray-100" />
                </label>
              </div>
              <div className="mt-5">
                <button className="w-full bg-[#5BB85C] py-3 text-center text-white rounded-md">Register Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default SignUpForUser;
