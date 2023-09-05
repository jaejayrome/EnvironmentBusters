import { Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { useState, useEffect, useRef} from 'react';

export default function Demo() { 
  const [file, setFile] = useState(''); 
  const [haveImage, setHaveImage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);  
  const [submitted, setIsSubmitted] = useState(false);

  const imageUploadRef = useRef(null);

  const imageRefHandler = () => {
    imageUploadRef.current.click();
  };

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

  useEffect(() => {
    const fileSelector = document.getElementById('file-selector');
    fileSelector.addEventListener('change', (event) => {
      if (event.target.files[0] != null) {
        const fileList = event.target.files;
        setFile(fileList);
        setHaveImage(true);
        console.log(fileList);
      }
  });
  }, [])

  const backendCall = async () => {
    setIsLoading(true)
  }

  
  async function handleImageUpload (event) { 
      const selectedFiles = event.target.files;
      const base64Array = [];
      for (const file of selectedFiles) {
        const base64 = await convertToBase64(file);
        base64Array.push(base64);
      }
      console.log(base64Array);
      setFile(''); 
  }
  
  return (
        <Box className="" id="Demo"> 
            <Box className="flex flex-row"> 
                <Box className="mx-auto py-5 text-center">
                  <Button className="" onClick = {imageRefHandler}
                  isDisabled = {isLoading}
                  colorScheme="teal"
                  > 
                  Upload Image
                  </Button>
                  <Button className="" isDisabled = {!haveImage} loadingText = "Submitting" isLoading = {isLoading} onClick = {backendCall}> 
                  Submit 
                  </Button>
                  <input
                  accept="image/*"
                  id="file-selector"
                  type="file"
                  ref={imageUploadRef}
                  style={{ display: "none" }}
                  onChange={handleImageUpload}
                  multiple
                  />
                </Box>
                
            </Box>
        </Box>
    )
}