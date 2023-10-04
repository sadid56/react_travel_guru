import NavberLogin from "../../shared/Navber/NavberLogin";
import cardimg1 from '../../assets/rectangle 26.png'
import cardimg2 from '../../assets/rectangle 27.png'
import cardimg3 from '../../assets/rectangle 28.png'
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import map from '../../assets/image 1.png'

const UserAccount = () => {
    const {logOut} = useContext(AuthContext);
    const handleLogOut = ()=>{
        logOut()
        .then(() => {
            toast.success('Log Out success')
        })
        .catch(error => {
            toast.error(error.message)
        })
    };

  return (
    <div className="max-w-6xl mx-auto px-5" >
      <NavberLogin></NavberLogin>
      <hr />
      <div className="mt-2 flex justify-end">
        <button onClick={handleLogOut} className="bg-[#F9A51A] px-4 py-2 rounded texl-xl font-semibold">
          Log Out
        </button>
      </div>

      {/* content */}
      <div className="grid md:grid-cols-4 mt-5 gap-5">
        <div className="col-span-2">
          <p className="text-xl">252 stays Apr 13-17 3 guests</p>
          <h2 className="text-3xl font-bold">Stay in Cox’s Bazar</h2>
          <div>
            <div class="flex mt-5 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
              <img
                class="object-cover w-full rounded-t-lg  md:h-auto md:w-60 md:rounded-none md:rounded-l-lg"
                src={cardimg1}
                alt=""
              />
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Light bright airy stylish apt & safe 
                </h5>
                <p class="mb-3 font-normal text-gray-700 ">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </div>
            <div class="flex mt-5 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
              <img
                class="object-cover w-full rounded-t-lg  md:h-auto md:w-60 md:rounded-none md:rounded-l-lg"
                src={cardimg2}
                alt=""
              />
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Apartment in Lost Panorama
                </h5>
                <p class="mb-3 font-normal text-gray-700 ">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </div>
            <div class="flex mt-5 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
              <img
                class="object-cover w-full rounded-t-lg  md:h-auto md:w-60 md:rounded-none md:rounded-l-lg"
                src={cardimg3}
                alt=""
              />
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                AR Lounge & Pool (r&r + b&b)
                </h5>
                <p class="mb-3 font-normal text-gray-700 ">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2">

        <img src={map} alt="" />

        </div>
      </div>
    </div>
  );
};

export default UserAccount;
