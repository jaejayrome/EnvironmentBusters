import { Box } from "@chakra-ui/layout";
import EnvironmentLogo from "../images/aaa.png";
import { useState } from 'react;'

export default function Demo() { 
  const [file, setFile] = useState(); 

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  async function submitHandler(event) { 
    const image = event.target.files[0];
    const base64 = await convertToBase64(image); 
    setFile(base64);
  }
  
  return (
        <Box className=""> 
            <Box className="flex flex-row"> 
                <Box className="mx-auto py-5 text-center">
                  <div> 
                            <span className="text-5xl"> 
                                Upload Image Here 
                            </span> 
                        </div>
                  <form onSubmit={submitHandler}>
                    <input type="file"/>
                    <button className="submitButton" onClick={submitHandler}>
                      Submit 
                    </button>
                  </form>
                </Box>
                
            </Box>
        </Box>
    )
}