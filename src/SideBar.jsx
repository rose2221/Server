import { Link, Outlet } from "react-router-dom";


function SideBar() {

    return (
      <>
  <div className="absolute left-0 flex h-screen w-72 flex-col overflow-hidden rounded-r-2xl text-black sidebar" >
    <ul className="mt-20 space-y-3">
    <Link to= "result">
      <li className="relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 font-semibold hover:bg-slate-600">
        <span
          ><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg></span
        ><span className="">Add Jobs</span>
      </li>
    </Link>
    <Link to = "verification">
      <li className="relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 text-gray-300 hover:bg-slate-600">
        <span
          ><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg></span
        ><span className="">Verification Status</span>
      </li>
    </Link>
    </ul>
  </div>
    <Outlet />
      </>
    )
  }

export default SideBar
  
