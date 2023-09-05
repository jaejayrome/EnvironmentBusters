import { Box } from "@chakra-ui/layout";
import { useState, useEffect, useRef } from 'react';

export default function Demo() { 
  const [file, setFile] = useState(''); 

  const convertToBase64 = async(file) => {
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

  const handleImageUpload = async (e) => { 
    const file = e.target.files[0]; 
    setFile(file);
    const base64 = await convertToBase64(file); 
    console.log(base64); 
    console.log(file);
  }

  useEffect(() => {
    const fileSelector = document.getElementById('file-selector');
    fileSelector.addEventListener('change', (event) => {
      if (event.target.files[0] != null) {
        const fileList = event.target.files;
        setFile(fileList);
        console.log(fileList);
      }
  });
  }, [])

  
  async function submitHandler(event) { 
    event.preventDefault();
    console.log(file[0]);
    const base64 = await convertToBase64(file[0]);
    console.log(base64);
    const form = event.currentTarget;
    setFile('');
  }
  
  return (
        <Box className="" id="Demo"> 
            <Box className="flex flex-row"> 
                <Box className="mx-auto py-5 text-center">
                  <form onSubmit={submitHandler}> 
                    <div> 
                      
                            <span className="text-5xl"> 
                                Upload Image Here 
                            </span> 
                        </div>
                    <input id="file-selector" type="file"/>
                    <button type="submit" className="submitButton" onClick={submitHandler}/*onClick={imageRefHandler} */>
                      Submit 
                    </button>
                  </form>
                </Box>
                
            </Box>
        </Box>
    )
}