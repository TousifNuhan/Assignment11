import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye } from "react-icons/ai";
import { GoPencil } from "react-icons/go";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "../Providers/AuthProvider";

// or via CommonJS
// const Swal = require('sweetalert2')

// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'

const MappingAssignments = ({ aData }) => {
  const { user } = useContext(AuthContext)
  const navigate=useNavigate()
  const { _id, email, Title, Marks, dueDate, photoURL, DifficultyLevel, description } = aData

  console.log(DifficultyLevel, _id)

  const handleDelete = (id, email) => {
    console.log(email)
    console.log(user?.email)
    if (user?.email === email) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      })
        .then((result) => {
          if (result.isConfirmed) {
            fetch(`http://localhost:5000/createAssignments/${id}`, {
              method: 'DELETE',
            })
              .then(res => res.json())
              .then(data => {
                if (data.deletedCount > 0) {
                  toast.success('Assignment Deleted Successfully')
                }
              })
          }
        })

    }
    else if(!user){
      toast.error('At first you have to login')
      navigate('/login')
    }
    else{
      toast.error("Invalid User")
    }
    
  }

  // const datas=useLoaderData()
  // console.log(datas)


  return (
    <div>
      <div className="border-2 border-[#e4e4e7] rounded-lg mb-10">
        <div className="relative z-10 ">
          <img className="w-[100%] rounded-lg h-60" src={photoURL} alt="" />
          <p className={`rounded-xl px-2 py-1 absolute z-50 right-3 top-3 font-semibold text-xs ${DifficultyLevel === 'easy' && "text-green-800 hover:bg-green-200 bg-green-100 "} ${DifficultyLevel === 'medium' && "text-[#854d0e] bg-yellow-100 hover:bg-yellow-200"} ${DifficultyLevel === 'hard' && "text-[#991b1b] bg-red-100 hover:bg-red-200"}`}>{DifficultyLevel}</p>
        </div>
        <div className="w-11/12 mx-auto">
          <div className="flex justify-between items-center mt-6">
            <h3 className="text-xl font-semibold">{Title}</h3>
            <p className="text-xs font-semibold border rounded-2xl px-2 py-1 border-[#e4e4e7] bg-white text-black">{Marks} marks</p>
          </div>
          <div className=" mt-3 mb-5">
            <p className="text-[#71717a] text-sm font-semibold">Due: {dueDate}</p>
          </div>
          <div className=" flex justify-center gap-2 pb-12">
            <Link to={`/assignments/${_id}`}>
              <div>
                <button className='flex justify-between items-center py-2 px-6 cursor-pointer rounded-sm border border-[#00bafe] text-[#00bafe] hover:text-[hsl(196,100%,46%)] min-w-28'>
                  <AiOutlineEye className="w-5 h-5" />
                  <p className=" text-sm font-semibold ">View</p>
                </button>
              </div>
            </Link>
            <div>

              <Link to={`/updateAssignments/${_id}`}>
                <button className='flex justify-between items-center py-2 px-6 cursor-pointer rounded-sm border border-[#fcb700] text-[#fcb700] hover:text-[hsl(44,99%,46%)] min-w-28'>
                  <GoPencil className="w-4 h-5" />
                  <p className="ml-2 text-sm font-semibold">Update</p>
                </button>
                </Link>

            </div>
            <div>
              <button onClick={() => handleDelete(_id, email)} className='flex justify-between items-center py-2 px-6 cursor-pointer rounded-sm border border-[#ef4444] text-[#ef4444] hover:text-[rgb(248,40,40)] min-w-28'>
                <RiDeleteBinLine className="w-4 h-5" />
                <p className="ml-2 text-sm font-semibold ">Delete</p>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MappingAssignments;