import { Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { useState, useEffect, useRef} from 'react';
import { v4 } from 'uuid';
import axios from "axios";

export default function Demo() { 
  const [file, setFile] = useState(''); 
  const [haveImage, setHaveImage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);  
  const [uuid, setUUID] = useState(null);
  const [array, setArray] = useState([])

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

  // need another method to convert back to img

  const receiveEncodedFromBackend = (path_param) => {
    console.log(uuid)
    axios.get(`http://localhost:80/prediction/${path_param}`)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
  }

  const sendImagesToBackend = () => {
    const path_param = v4().toString();
    setUUID(path_param)
    setIsLoading(true)
    console.log(array);
    axios.post(`http://localhost:80/image/${path_param}`, {
      encoded_string_list : array
    })
    .then(response => {
      setIsLoading(false)
      receiveEncodedFromBackend(path_param)
    })
    .catch(error => console.log(error))
  }

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

  
  async function handleImageUpload (event) { 
      const selectedFiles = event.target.files;
      const base64Array = [];
      for (const file of selectedFiles) {
        const base64 = await convertToBase64(file);
        base64Array.push(base64);
      }
      setArray(base64Array)
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
                  <Button className="" isDisabled = {!haveImage} loadingText = "Submitting" isLoading = {isLoading} onClick = {sendImagesToBackend}> 
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