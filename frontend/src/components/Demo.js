import { Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { useState, useEffect, useRef} from 'react';
import { v4 } from 'uuid';
import MyCarousel from "./Carousel";
import axios from "axios";

export default function Demo() { 
  const [file, setFile] = useState([]); 
  const [haveImage, setHaveImage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);  
  const [array, setArray] = useState([])
  const [receivedArray, setReceivedArray] = useState([])

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



  const receiveEncodedFromBackend = async (path_param) => {
    try {
      const response = await axios.get(
        `http://localhost:80/prediction/${path_param}`
      );
      setReceivedArray(JSON.parse(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  const sendImagesToBackend = async () => {
    const path_param = v4().toString();
    setIsLoading(true);

    try {
      const response = await axios.post(`http://localhost:80/image/${path_param}`, {
        encoded_string_list: array,
      });
      receiveEncodedFromBackend(path_param);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  const convertFileListToArray = (fileList) => {
    const array = [];
    for (let i = 0; i < fileList.length; i++) {
      array.push(fileList[i]);
    }
    return array;
};


  useEffect(() => {
    const fileSelector = document.getElementById('file-selector');
    fileSelector.addEventListener('change', (event) => {
      if (event.target.files[0] != null) {
        const fileList = event.target.files;
        setFile([...fileList]);
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
  }
  
  return (
        <Box className="" id="Demo"> 
            <Box className="flex flex-row"> 
                <Box className="mx-auto py-5 text-center space-x-4">
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

            <section> 
              <div className="flex flex-row mx-auto px-4"> 
                <div> 
                  {file && file.length > 0 && (<MyCarousel input = {true} images = {convertFileListToArray(file)}/>)}
                </div>

                <div> 
                  {receivedArray.length > 0 && (<MyCarousel input = {false} images = {receivedArray}/>)}
                </div>
              </div>
            </section>

          
        </Box>
    )
}