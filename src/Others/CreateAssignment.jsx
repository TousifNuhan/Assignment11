import { IoIosArrowDown } from "react-icons/io";
import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { AuthContext } from "../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import useAuth from "../Hooks/useAuth";

const CreateAssignment = () => {

    // const {user}=useContext(AuthContext)
    const { user } = useAuth()

    const [startDate, setStartDate] = useState();

    const handleCreateAssignmentForm = e => {
        e.preventDefault()

        const form = e.target
        const email = user.email
        const Title = form.Title.value
        const Marks = form.Marks.value
        const dueDate = form.dueDate.value
        const photoURL = form.photoURL.value
        const DifficultyLevel = form.DifficultyLevel.value
        const description = form.description.value

        console.log(email, Title, Marks, dueDate, photoURL, DifficultyLevel, description)

        const newAss = { email, Title, Marks, dueDate, photoURL, DifficultyLevel, description }

        fetch('http://localhost:5000/createAssignments',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                credentials:'include',
                body: JSON.stringify(newAss)
            }
        )
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.message === 'Unauthorized' || data.message === 'Forbidden access'){
                    toast.error(data.message)
                }

                if (data.acknowledged) {
                    toast.success("Assignment created successfully!")
                    form.reset()
                }
            }

            )
    }

    return (
        <div className='pt-[8%] min-h-screen bg-base-100 text-base-content'>
            <div className="w-11/12 flex flex-col items-center mx-auto my-3">
                <h1 className="text-base-content font-bold text-xl md:text-3xl">Create a New Assignment</h1>
                {/* <h1 className="text-base-content text-3xl font-bold ">Create a New Assignment</h1> */}
                <p className="text-center text-gray-500 font-semibold text-sm w-4/5 md:w-3/5 pt-1 md:mt-1 mb-7">Get started by setting up an assignment for your study group! Fill out the details below to help your peers stay on track and collaborate effectively.</p>
                {/* <p className="text-base-content"> aaas</p> */}
            </div>
            <form onSubmit={handleCreateAssignmentForm} className='md:mt-0 mt-6 mb-10'>
                <div className=" border-2 border-[#e4e4e7] hover:border-gray-400 hover:delay-150 hover:duration-200 rounded-2xl w-3/5 mx-auto p-6 md:p-10">

                    <div >
                        <h1 className="text-base-content font-bold text-2xl mb-4 pb-3">Create New Assignment</h1>
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
                                className="border-2 py-3 px-3 rounded-lg
                                border-[#e4e4e7] focus:outline-none focus:border-gray-400 w-full max-w-xl"/>
                        </div>
                        <div className="flex-1">
                            <label className="label">
                                <span className="label-text text-gray-500 text-base font-semibold mb-2">Marks</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Enter Marks"
                                name="Marks"
                                min={1}
                                className="border-2 py-3 px-3 rounded-lg
                                border-[#e4e4e7] focus:outline-none focus:border-gray-400 w-full max-w-xl" />
                        </div>
                        <div className="flex flex-col mt-2">
                            <label className="label">
                                <span className="label-text text-gray-500 text-base font-semibold mb-2">Due Date</span>
                            </label>
                            <DatePicker
                                placeholderText="Select due date"
                                name="dueDate"
                                className="border-2 py-3 px-3 rounded-lg
                                border-[#e4e4e7] focus:outline-none focus:border-gray-400 w-2/3 " selected={startDate}
                                onChange={(date) => setStartDate(date)} />
                            {/* <input
                                type="number"
                                placeholder="Enter Marks"
                                name="Marks"
                                className="border-2 py-3 px-3 rounded-lg
                                border-[#e4e4e7] focus:outline-none focus:border-gray-400 min-w-1/3 " /> */}
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
                            className="border-2 py-3 px-3 rounded-lg
                                border-[#e4e4e7] focus:outline-none focus:border-gray-400 w-full " />
                    </div>

                    <div className="">
                        <div className="space-y-2">
                            <label htmlFor="difficulty " className="label-text text-gray-500 text-base font-semibold ">Difficulty Level</label>
                            <div className=" flex relative">
                                <select
                                    id="difficulty"
                                    className="border-2 py-3 px-3 pl-3 appearance-none rounded-lg mt-2 
                                border-[#e4e4e7] focus:outline-none focus:border-gray-400 w-full"
                                    required
                                    name="DifficultyLevel"
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
                                className="border-2 py-3 px-3 pl-3 appearance-none rounded-lg mt-2 
                                border-[#e4e4e7] focus:outline-none focus:border-gray-400 w-full max-w-xl" />
                        </div>
                    </div>

                    <div className="flex justify-center pt-5">
                        <button className="text-white w-2/5 md:w-full py-3 rounded-[4px]  bg-[#18181b] hover:opacity-95 cursor-pointer">Create Assignment</button>
                    </div>
                </div>
            </form>

        </div>

        // <div>
        //     <Card className="w-full max-w-3xl mx-auto bg-gradient-to-br from-white to-gray-50 shadow-lg">
        //         <CardHeader className="border-b border-gray-200">
        //             <CardTitle className="text-3xl font-bold text-gray-800 flex items-center gap-2">
        //                 <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        //                 </svg>
        //                 New Assignment
        //             </CardTitle>
        //         </CardHeader>
        //         <CardContent className="p-6">
        //             <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        //                 {/* Left Column */}
        //                 <div className="space-y-5">
        //                     <div className="space-y-2">
        //                         <Label className="text-gray-700 font-medium">Assignment Title</Label>
        //                         <Input
        //                             placeholder="Enter assignment name"
        //                             className="border-gray-300 focus:ring-2 focus:ring-indigo-200"
        //                         />
        //                     </div>

        //                     <div className="space-y-2">
        //                         <Label className="text-gray-700 font-medium">Description</Label>
        //                         <Textarea
        //                             rows={5}
        //                             placeholder="Detailed instructions..."
        //                             className="border-gray-300 focus:ring-2 focus:ring-indigo-200"
        //                         />
        //                     </div>
        //                 </div>

        //                 {/* Right Column */}
        //                 <div className="space-y-5">
        //                     <div className="grid grid-cols-2 gap-4">
        //                         <div className="space-y-2">
        //                             <Label className="text-gray-700 font-medium">Total Marks</Label>
        //                             <Input
        //                                 type="number"
        //                                 placeholder="100"
        //                                 className="border-gray-300 focus:ring-2 focus:ring-indigo-200"
        //                             />
        //                         </div>
        //                         <div className="space-y-2">
        //                             <Label className="text-gray-700 font-medium">Difficulty</Label>
        //                             <Select>
        //                                 <SelectTrigger className="border-gray-300 focus:ring-2 focus:ring-indigo-200">
        //                                     <SelectValue placeholder="Select level" />
        //                                 </SelectTrigger>
        //                                 <SelectContent>
        //                                     <SelectItem value="easy" className="text-green-600">Easy</SelectItem>
        //                                     <SelectItem value="medium" className="text-yellow-600">Medium</SelectItem>
        //                                     <SelectItem value="hard" className="text-red-600">Hard</SelectItem>
        //                                 </SelectContent>
        //                             </Select>
        //                         </div>
        //                     </div>

        //                     <div className="space-y-2">
        //                         <Label className="text-gray-700 font-medium">Due Date</Label>
        //                         <div className="flex gap-2">
        //                             <Input type="date" className="border-gray-300 focus:ring-2 focus:ring-indigo-200 flex-1" />
        //                             <Input type="time" className="border-gray-300 focus:ring-2 focus:ring-indigo-200 w-24" />
        //                         </div>
        //                     </div>

        //                     <div className="space-y-2">
        //                         <Label className="text-gray-700 font-medium">Cover Image URL</Label>
        //                         <Input
        //                             type="url"
        //                             placeholder="https://example.com/cover.jpg"
        //                             className="border-gray-300 focus:ring-2 focus:ring-indigo-200"
        //                         />
        //                     </div>

        //                     <div className="pt-4">
        //                         <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md shadow-sm transition-colors">
        //                             Create Assignment
        //                         </Button>
        //                     </div>
        //                 </div>
        //             </form>
        //         </CardContent>
        //     </Card>
        // </div>


    );
};

export default CreateAssignment;