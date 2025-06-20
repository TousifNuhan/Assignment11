import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
const PendingAssignment = () => {
    // const [allAssignments, setAllAssignments] = useState([])
    const [selectedAssignment, setSelectedAssignment] = useState([])
    const axiosSecure = useAxiosSecure()
    const queryClient=useQueryClient()

    const { data: allAssignments = [],
        refetch }
        = useQuery({
            queryFn: async () => {
                const { data } = await axiosSecure.get('/allSubmittedAssignments')
                return data
            },
            queryKey: ['allPendingAssignments']
        })

    // useEffect(() => {
    //     // fetch('http://localhost:5000/allSubmittedAssignments')
    //     //     .then(res => res.json())
    //     //     .then(data => {
    //     //         console.log(data)
    //     //         setAllAssignments(data)
    //     //     })



    //     axiosSecure.get('/allSubmittedAssignments')
    //         .then(res => {
    //             setAllAssignments(res.data)
    //         })
    // }, [])

    const openModal = (assignment) => {

        setSelectedAssignment(assignment)
        document.getElementById('modal2').showModal()
    }

     const { mutateAsync } = useMutation({
            mutationFn: async (markingUpdated) => {
                const { data } = await axiosSecure.patch(`/submittedAssignments/${selectedAssignment._id}`, markingUpdated)
                return data
            },
            onSuccess: () => {
                toast.success('Feedback and marks submitted!')
                // refetch()

                // refetch er borobhai
                queryClient.invalidateQueries({queryKey:['allPendingAssignments']})
            }
        })

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target
        const Status = 'Completed'
        const GetMarks = form.GetMarks.value
        const Feedback = form.Feedback.value

        // form.reset()

        console.log(GetMarks, Feedback)

        const markingUpdated = { Status, GetMarks, Feedback }

        document.getElementById('modal2').close()
        form.reset()

       mutateAsync(markingUpdated)

        // fetch(`http://localhost:5000/submittedAssignments/${selectedAssignment._id}`, {
        //     method: 'PATCH',
        //     headers: {
        //         'content-type': 'application/json'
        //     },

        //     body: JSON.stringify(markingUpdated)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         toast.success('Feedback and marks submitted!')
        //     })
    }



    return (
        <div className="mt-28 min-h-screen  bg-base-100 text-base-content">
            <div>
                <div className='text-center mb-8'>
                    <h1 className="text-base-content font-bold text-xl md:text-3xl">Pending Assignments</h1>
                    <p className="text-center text-gray-500 font-semibold text-sm w-4/5 md:w-4/5 pt-1 md:mt-2 mb-7 mx-auto">This section displays all submitted assignments that are currently waiting for review and grading. As part of the collaborative learning process, you can view your peers’ work, assess their submissions, and provide constructive feedback along with marks. Use this page to help maintain a fair and supportive group study environment by evaluating pending tasks responsibly.</p>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Marks</th>
                            <th>Examine Name</th>
                            <th>Mark</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            allAssignments.map((assignment, index) =>
                            (
                                <tr key={assignment._id}>
                                    <th>{index + 1}</th>
                                    <td>{assignment.Title}</td>
                                    <td>{assignment.Marks}</td>
                                    <td>{assignment.Name}</td>
                                    <td><button type="submit" onClick={() => openModal(assignment)} className="md:mt-0 mt-3 px-6 py-3 mr-1 text-white bg-sky-500 hover:bg-sky-700 text-sm font-semibold rounded-md cursor-pointer">Give mark</button>
                                        <dialog id="modal2" className="modal">
                                            <div className="modal-box">
                                                <form onSubmit={handleSubmit}  >
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <form method="dialog">
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    </form>

                                                    <div>
                                                        <h3 className="font-semibold text-base mb-1 text-gray-500">Evaluate Submission: </h3>
                                                        <a href={`http://localhost:5000${selectedAssignment.FileURL}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                                                            View Document
                                                        </a>
                                                    </div>
                                                    <div className="mt-3">
                                                        <h3 className="font-semibold text-base mb-1 text-gray-500">Note From Examine: </h3>
                                                        <p>{selectedAssignment.TextArea}</p>
                                                    </div>
                                                    <div className="mt-3">
                                                        <label className="label block mb-2">
                                                            <span className="label-text text-gray-500 text-base font-semibold mb-2">Marks</span>
                                                        </label>
                                                        <input
                                                            type="number"
                                                            placeholder="Enter Marks"
                                                            min={0}
                                                            max={selectedAssignment.Marks}
                                                            required
                                                            name="GetMarks"
                                                            className="border-2 py-3 px-3 rounded-lg
                                border-[#e4e4e7] focus:outline-none focus:border-gray-400 w-4/5" />
                                                    </div>
                                                    <div className="mt-3">
                                                        <label className="label block mb-2">
                                                            <span className="label-text text-gray-500 text-base font-semibold mb-2">Feedback</span>
                                                        </label>
                                                        <textarea
                                                            name="Feedback"
                                                            required
                                                            placeholder="Give your feedback" className="focus:outline-none w-full rounded-lg border-2 border-[#e4e4e7]  focus:border-gray-400 pl-2 pt-2"></textarea>

                                                    </div>


                                                    <div className="mt-2">
                                                        <button type="submit" className="btn  btn-outline">Submit</button>
                                                    </div>



                                                </form>
                                            </div>
                                        </dialog>
                                    </td>
                                </tr>

                            )
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PendingAssignment;