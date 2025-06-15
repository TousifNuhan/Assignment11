import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

// Plugin for file type validation
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import { AuthContext } from "../Providers/AuthProvider";
import toast from "react-hot-toast";
registerPlugin(FilePondPluginFileValidateType);

const AssignmentDetails = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    const [files, setFiles] = useState([]);

    const data = useLoaderData()
    const { _id, email, Title, Marks, dueDate, photoURL, DifficultyLevel, description } = data

    console.log(data)



    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const Email = user?.email
        const Name = user?.displayName
        const File = files[0].file
        const TextArea = form.textArea.value
        const Status = "Pending"

        console.log(File, TextArea)

        const formData = new FormData()
        formData.append("Name", Name)
        formData.append("Email", Email)
        formData.append("File", File)
        formData.append("TextArea", TextArea)
        formData.append("Status", Status)
        formData.append("Title", Title)
        formData.append("Marks", Marks)


        document.getElementById('modal').close()

        // cleared the modal form
        setFiles([])
        form.reset()

        // const submittedAssignmentDetails = { Name, Title, Marks, Email, File, TextArea, Status }

        fetch('http://localhost:5000/submittedAssignments', {
            method: 'POST',
            // headers: {
            //     'content-type': 'application/json'
            // },
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                toast.success("You've successfully submitted the assignment")
                console.log(data)
            })

    }

    return (
        <div className="mt-32 mb-10   min-h-screen bg-base-100 text-base-content">
            <div className="w-4/5 mx-auto">
                <h3 className="text-2xl font-semibold">{Title}</h3>
                <div className="flex  justify-between mt-5">
                    <div className="mt-3">
                        <div className="flex ">
                            <h5><span className="text-sm font-semibold">Type:</span> <span>{DifficultyLevel}</span></h5>
                            <h5 className="ml-5"> <span className="text-sm font-semibold">Marks:</span> <span>{Marks}</span></h5>
                        </div>
                        <div className="mt-5 mb-14">
                            <p className="w-4/5 mb-5">{description}</p>
                            <h5><span className="text-sm font-semibold">Due Date:</span>  <span>{dueDate}</span></h5>
                        </div>


                        <button onClick={() => document.getElementById('modal').showModal()} className="bg-[#59c6bc] py-3 cursor-pointer px-12 text-white rounded-4xl hover:bg-[#FFF568] hover:text-black font-semibold">Take Assignment</button>
                        <dialog id="modal" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                {/* Pdf generator package */}
                                <form onSubmit={handleSubmit}>
                                    <div className="w-full max-w-md mx-auto mt-10 ">
                                        <FilePond
                                            className=""
                                            files={files}
                                            onupdatefiles={setFiles}
                                            allowMultiple={false}
                                            name="file" // used to POST field name
                                            labelIdle='📄 Drag & drop your PDF/DOC file or <span class="filepond--label-action">Browse</span>'
                                            acceptedFileTypes={[
                                                'application/pdf',
                                                'application/msword',
                                                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                                            ]}
                                        />
                                        <div className="w-full ">
                                            <h3 className="text-base font-semibold mb-1">Note: </h3>
                                            <textarea name="textArea" placeholder="Give a quick note" className="focus:outline-none w-full rounded-lg border border-black pl-2 pt-2 h-24"></textarea>
                                        </div>
                                        <div className="mt-2">
                                            <div>
                                                <button type="submit" className="block btn btn-outline mx-auto ">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </dialog>
                    </div>
                    <div>

                        <img className="w-full h-full" src={photoURL} alt="" />
                    </div>

                </div>
            </div>

        </div>
    );
};

export default AssignmentDetails;