import React from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const navigate=useNavigate()

  return (
    <div style={{display:"flex", border:'1px solid', justifyContent:'space-between', padding:'1%'}}>
      <h3 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">CuvetteBlog</h3>
      <div style={{display:"flex", gap:'10px',width:'10rem'}}>
        <button
        //   type="submit"
          onClick={()=>navigate('/signIn')}
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign-in
        </button>

        <button
        //   type="submit"
          onClick={()=>navigate('/signUp')}
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign-up
        </button>
      </div>
    </div>
  );
};
