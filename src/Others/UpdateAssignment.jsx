import { IoIosArrowDown } from "react-icons/io";
import React, { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { AuthContext } from "../Providers/AuthProvider";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useMutation, useQueries, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const UpdateAssignment = () => {
    // const datas = useLoaderData()
    // console.log(datas)
    const { id } = useParams()
    const axiosSecure = useAxiosSecure()

    const queryClient=useQueryClient()

    const { data: datas = [] } = useQuery({
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/createAssignments/${id}`)
            return data
        },
        queryKey: ['updateAssignments']
    })

    const { _id, email, Title, Marks, dueDate, photoURL, DifficultyLevel, description } = datas
    console.log(_id)

    // const { user } = useContext(AuthContext)
    const { user } = useAuth()
    const navigate = useNavigate()

    const [startDate, setStartDate] = useState();

    const {mutateAsync}=useMutation({
        mutationFn: async (UpdatedDatas) => {
            const { data } = await axiosSecure.put(`/createAssignments/${_id}`,UpdatedDatas)
            return data
        },
        onSuccess: () => {
            toast.success('Updated Successfully!')
            navigate('/assignments')

            // refresh er borobhai re use kortesi

            queryClient.invalidateQueries({queryKey:['updateAssignments']})
        }
    })

    const handleUpdateAssignmentForm = (e) => {
        e.preventDefault()

        const form = e.target
        const Title = form.Title.value
        const Marks = form.Marks.value
        const dueDate = form.dueDate.value
        const photoURL = form.photoURL.value
        const DifficultyLevel = form.DifficultyLevel.value
        const description = form.description.value

        const UpdatedDatas = { Title, Marks, dueDate, photoURL, DifficultyLevel, description }

        mutateAsync(UpdatedDatas)

        // fetch(`http://localhost:5000/createAssignments/${_id}`, {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(UpdatedDatas)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         if (data.modifiedCount > 0) {
        //             toast.success('Updated Successfully!')
        //             navigate('/assignments')
        //         }
        //     })

    }
    return (
        <div>
            <div className='lg:pt-[8%] md:pt-[13%] min-h-screen bg-base-100 '>
                <div className="w-11/12 flex flex-col items-center mx-auto my-3">
                    <h1 className="text-base-content font-bold text-xl md:text-3xl">Update an Assignment</h1>
                    <p className="text-center text-gray-500 font-semibold text-sm w-4/5  pt-1 md:mt-1 mb-7">Keep your study group organized and informed by updating the details of this assignment. Use the form below to make any necessary changes—whether it's adjusting the due date, modifying the title, updating the marks, or revising the description. Keeping assignments up-to-date ensures everyone stays aligned and can collaborate effectively.</p>
                </div>
                <form onSubmit={handleUpdateAssignmentForm} className='md:mt-0 mt-6 mb-10'>
                    <div className=" border-2 border-[#e4e4e7] hover:border-gray-400 hover:delay-150 hover:duration-200 rounded-2xl md:w-4/5 lg:w-3/5 mx-auto p-6 md:p-10">

                        <div >
                            <h1 className="text-base-content font-bold text-xl lg:text-2xl mb-4 pb-3">Update Assignment</h1>
                        </div>

                        <div className="md:grid grid-cols-2 items-center ">
                            <div className="flex-1 mr-10">
                                <label className="label">
                                    <span className="label-text text-gray-500 text-base font-semibold mb-2">Title</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Title"
                                    name="Title"
                                    defaultValue={Title}
                                    className="border-2 py-3 px-3 rounded-lg
                                            border-[#e4e4e7] focus:outline-none focus:border-gray-400 w-full max-w-xl text-base-content"/>
                            </div>
                            <div className="flex-1">
                                <label className="label">
                                    <span className="label-text text-gray-500 text-base font-semibold mb-2">Marks</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Enter Marks"
                                    name="Marks"
                                    defaultValue={Marks}
                                    className="border-2 py-3 px-3 rounded-lg
                                            border-[#e4e4e7] focus:outline-none focus:border-gray-400 w-full max-w-xl text-base-content" />
                            </div>
                            <div className="flex flex-col mt-2">
                                <label className="label">
                                    <span className="label-text text-gray-500 text-base font-semibold mb-2">Due Date</span>
                                </label>
                                <DatePicker
                                    placeholderText={dueDate}
                                    name="dueDate"

                                    className="border-2 py-3 px-3 rounded-lg text-base-content
                                            border-[#e4e4e7] focus:outline-none focus:border-gray-400 w-2/3 " selected={startDate}
                                    onChange={(date) => setStartDate(date)} />

                            </div>
                        </div>



                        <div className="my-4">
                            <label className="label">
                                <span className="label-text text-gray-500 text-base font-semibold mb-2 ">ImageURL</span>
                            </label>
                            <input
                                type="url"
                                placeholder="Enter the PhotoUrl"
                                name="photoURL"
                                defaultValue={photoURL}
                                className="border-2 py-3 px-3 rounded-lg
                                            border-[#e4e4e7] focus:outline-none focus:border-gray-400 w-full text-base-content" />
                        </div>

                        <div className="">
                            <div className="space-y-2">
                                <label htmlFor="difficulty " className="label-text text-gray-500 text-base font-semibold ">Difficulty Level</label>
                                <div className=" flex relative">
                                    <select
                                        id="difficulty"
                                        className="border-2 py-3 px-3 pl-3 appearance-none rounded-lg mt-2 
                                            border-[#e4e4e7] focus:outline-none focus:border-gray-400 w-full text-gray-500 "
                                        required
                                        name="DifficultyLevel"
                                        defaultValue={DifficultyLevel}
                                    >
                                        <option value="" disabled>Select difficulty level</option>
                                        <option value="easy">Easy</option>
                                        <option value="medium">Medium</option>
                                        <option value="hard">Hard</option>
                                    </select>
                                    <IoIosArrowDown className="absolute right-3 top-2/5 mt-1" />
                                </div>

                            </div>

                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text text-gray-500 text-base font-semibold mt-3">Description</span>
                            </label>
                            <div>
                                <textarea
                                    type="text"
                                    placeholder="Write a short description..."
                                    name="description"
                                    defaultValue={description}
                                    className="border-2 py-3 px-3 pl-3 appearance-none rounded-lg mt-2 
                                            border-[#e4e4e7] focus:outline-none focus:border-gray-400 w-full max-w-xl text-base-content" />
                            </div>
                        </div>

                        <div className="flex justify-center pt-5">
                            <button className="text-white w-2/5 md:w-full py-3 rounded-[4px]  bg-[#18181b] hover:opacity-95 cursor-pointer">Update Assignment</button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default UpdateAssignment;