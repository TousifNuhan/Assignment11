import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const MySubmittedAssignments = () => {
    const { user } = useContext(AuthContext)

    const [assignments, setAssignments] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/mySubmittedAssignments?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAssignments(data)
            })
    }, [user?.email])


    return (
        <div className='mt-28 mb-5 min-h-screen '>
            <div className='text-center mb-8'>
                <h1 className='text-3xl font-semibold'>My Submitted Assignments</h1>
                <p className='text-sm w-4/5 mx-auto font-medium mt-3'>Welcome to your submitted assignments dashboard. Here, you can track the progress of the assignments you've taken, review their statuses, and view any feedback or marks you've received. Stay updated on which tasks are still under review and which have been graded. This section helps you monitor your growth and contributions in the group study environment.</p>
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
                                    <td>{assignment.getMarks || 'N/A'}</td>
                                    <td>{assignment.feedback || 'N/A'}</td>

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