import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import axios from 'axios';
import useAuth from '../Hooks/useAuth';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const MySubmittedAssignments = () => {
    // const { user } = useContext(AuthContext)
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    // console.log(user?.email)

    const { data: assignments = [],
        refetch,
        isError,
        error,
        isLoading } = useQuery({
            // queryFn: () => getData(),
            queryFn: async () => {
                const { data } = await axiosSecure.get(`/mySubmittedAssignments?email=${user?.email}`)
                return data
            },
            queryKey: ['submittedAssignments']   // better cache key
        })

    // const getData = async () => {
    //     const { data } = await axiosSecure.get(`/mySubmittedAssignments?email=${user?.email}`)
    //     return data
    // }

    // const [assignments, setAssignments] = useState([])

    // useEffect(() => {

    //     //eta first a krslm then axios dye update kore felsi 2 tai same

    //     // fetch(`http://localhost:5000/mySubmittedAssignments?email=${user?.email}`)
    //     //     .then(res => res.json())
    //     //     .then(data => {
    //     //         console.log(data)
    //     //         setAssignments(data)
    //     //     })

    //     // axios.get(`http://localhost:5000/mySubmittedAssignments?email=${user?.email}`, {withCredentials: true})
    //     //     .then(res => {
    //     //         setAssignments(res.data)
    //     //     })

    //     axiosSecure.get(`/mySubmittedAssignments?email=${user?.email}`)
    //         .then(res => {
    //             setAssignments(res.data)
    //         })


    // }, [])


    return (
        <div className='mt-28 mb-5 min-h-screen bg-base-100 text-base-content'>
            <div className='text-center mb-8'>
                <h1 className="text-base-content font-bold text-xl md:text-3xl">My Submitted Assignments</h1>
                <p className="text-center text-gray-500 font-semibold text-sm w-4/5 md:w-4/5 pt-1 md:mt-2 mb-7 mx-auto">Welcome to your submitted assignments dashboard. Here, you can track the progress of the assignments you've taken, review their statuses, and view any feedback or marks you've received. Stay updated on which tasks are still under review and which have been graded. This section helps you monitor your growth and contributions in the group study environment.</p>
            </div>
            <div className="overflow-x-auto ">
                <table className="table ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Marks</th>
                            <th>Obtained marks</th>
                            <th>Feedback</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            assignments.map((assignment, index) =>
                            (
                                <tr key={assignment._id}>
                                    <th>{index + 1}</th>
                                    <td>{assignment.Title}</td>
                                    <td>{assignment.Status}</td>
                                    <td>{assignment.Marks}</td>
                                    <td>{assignment.GetMarks || 'N/A'}</td>
                                    <td>{assignment.Feedback || 'N/A'}</td>

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

export default MySubmittedAssignments;