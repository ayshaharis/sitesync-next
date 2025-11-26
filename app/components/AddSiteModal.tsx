// const AddModalSite=()=>{
//     const handleFormSubmit=(e)=>{
//         e.preventDefault();
//         const formData=new FormData(e.target as HTMLFormElement);
//     }
//     return(
//         <div>
//             <form onSubmit={handleFormSubmit}>
//                 <h2 className="text-2xl font-bold mb-4">Add New Site</h2>
//                 <input
//                 type="text"
//                 name="name"
//                 placeholder="Site Name"
//                required/>
//                <input
//                 type="text"
//                 name="location"
//                 placeholder="Enter Location"
//                 required/>
//                 <input 
//                 type="text"
//                 name="status"
//                 placeholder="Enter Status"
//                 required/>
//                 <button type="submit">Add Site</button>
//             </form>
//         </div>
//     )
// }