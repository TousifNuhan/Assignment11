import { useEffect, useState } from "react";

const PendingAssignment = () => {
    const [allAssignments, setAllAssignments] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allSubmittedAssignments')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAllAssignments(data)
            })
    }, [])

    return (
        <div className="mt-28 mb-5 min-h-screen ">
            <div>
                 <div className='text-center mb-8'>
                <h1 className='text-3xl font-semibold'>Pending Assignments</h1>
                <p className='text-sm w-4/5 mx-auto font-medium mt-3'>This section displays all submitted assignments that are currently waiting for review and grading. As part of the collaborative learning process, you can view your peers’ work, assess their submissions, and provide constructive feedback along with marks. Use this page to help maintain a fair and supportive group study environment by evaluating pending tasks responsibly.</p>
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
                                    <td><button type="submit" className="md:mt-0 mt-3 px-6 py-3 mr-1 text-white bg-sky-500 hover:bg-sky-700 text-sm font-semibold rounded-md cursor-pointer">Give mark</button></td>
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