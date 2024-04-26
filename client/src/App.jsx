import { useState } from "react";
import axios from 'axios'

function App() {
  const [title,setTitle]=useState();
  const [file,setFile]=useState();


  const handleSubmit= async (e)=>{
    e.preventDefault();
    const formData=new FormData();
    
    formData.append("title",title);
    formData.append("file",file);
    console.log(title,file)
    const result=await axios.post("http://localhost:3000/uploadfiles",formData,{
      Headers:{"Content-Type":"multipart/form-data"}
    })

    console.log(result);
  }



  return (
    <form  onSubmit={handleSubmit}>
     <h1>Upload the pdf file in react!!</h1><br />
     <input placeholder="title" type="text" required 
      onChange={(e)=>setTitle(e.target.value)}
     />
     <input accept="application/pdf" type="file" required 
      onChange={(e)=>setFile(e.target.files[0])}
     />


     <input type="submit" />
    </form>
  )

}

export default App;