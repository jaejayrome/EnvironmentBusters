import { Box} from "@chakra-ui/layout";
import { Card, CardHeader, CardBody} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useState, useEffect, useRef} from 'react';
import { v4 } from 'uuid';
import MyCarousel from "./Carousel";
import axios from "axios";
import { FaCaretRight, FaCloudArrowUp, FaCheckDouble, FaClock, FaEye } from 'react-icons/fa6';

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

  // bg-gradient-to-l from-indigo-400 to-teal-400 text-transparent bg-clip-text



  const receiveEncodedFromBackend = async (path_param) => {
    try {
      const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/prediction/${path_param}`
      );
      setTimeout(10000);
      setReceivedArray(JSON.parse(response.data));
    } catch (error) {
      
      console.log(error);
    }
  };

  const sendImagesToBackend = async () => {
    const path_param = v4().toString();
    setIsLoading(true);

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/image/${path_param}`, {
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
        <section id = "tutorial"> 
          <div className="text-4xl font-roboto flex flex-col justify-center items-center py-4"> 
            <span className="block"> Now, the <span className="inline-block text-green-900"> Demonstration. </span></span>
            <div className="grid-rows-4 sm:grid-rows-1 sm:grid-cols-4 grid gap-6 items-center mt-8 mx-10 min-h-full"> 
              
      
              <div className="flex flex-col justify-center items-center bg-green-500 shadow-xl rounded-xl p-4 min-h-full hover:scale-105"> 
                <div className="rounded-full bg-white p-4"> 
                  <FaCloudArrowUp />
                </div>

                <div className="flex flex-col justify-center items-center text-center text-black space-y-1"> 
                  <span className="mt-5"> 
                    STEP 1
                  </span>

                  <span className="text-xl "> 
                  Click on Submit Button. 
                  </span>

                  <span className="text-xl "> 
                  Multiple images can be selected.
                  </span>

                </div>
              </div>


        
              

              <div> 
                <div className="flex flex-col justify-center items-center bg-teal-500 shadow-xl rounded-xl p-4 min-h-full hover:scale-105"> 
                  <div className="rounded-full bg-white p-4"> 
                    <FaCheckDouble />
                  </div>

                  <div className="flex flex-col justify-center items-center text-center text-black space-y-1"> 
                    <span className="mt-5"> 
                      STEP 2
                    </span>

                    <span className="text-xl "> 
                    Verify whether the images selected are reflective of your choice.
                    </span>

                  </div>
                </div>


              </div>

                <div className="flex flex-col justify-center items-center bg-lime-300 shadow-xl rounded-xl p-4 min-h-full hover:scale-105"> 
                  <div className="rounded-full bg-white p-4"> 
                    <FaClock />
                  </div>

                  <div className="flex flex-col justify-center items-center text-center text-black space-y-1"> 
                    <span className="mt-5"> 
                      STEP 3
                    </span>

                    <span className="text-xl "> 
                    Click on Submit and Wait Patiently for Prediction to Load.
                    </span>
                  </div>
                </div>


    
                <div className="flex flex-col justify-center items-center bg-teal-700 shadow-xl rounded-xl p-4 min-h-full hover:scale-105"> 
                  <div className="rounded-full bg-white p-4"> 
                    <FaEye />
                  </div>

                  <div className="flex flex-col justify-center items-center text-center text-black space-y-1"> 
                    <span className="mt-5"> 
                      STEP 4
                    </span>

                    <span className="text-xl "> 
                    View Your Model Output!
                    </span>
                  </div>
                </div>
            </div>
          </div>
        </section>
            

        <section>
        <div className="bg-green-900 mt-10">
        {file.length > 0 && receivedArray.length > 0 && (
          <div className="min-w-full mx-auto grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 px-8 gap-2 sm:gap-4 mb-5">
            <div className="rounded-md mt-0 sm:mt-10 p-8 space-y-8 bg-green-900">
            <span className="font-logo text-xl sm:text-4xl my-8 block text-center text-green-200"> Input </span>
              {file !== null && receivedArray !== null && file.length > 0 && (
                <MyCarousel input={true} images={convertFileListToArray(file)} />
              )}
            </div>

            <div className=" rounded-md mt-0 sm:mt-10 p-8 space-y-8 bg-green-900">
            <span className="font-logo text-xl sm:text-4xl  my-8 block text-center text-green-200"> Output </span>
              {receivedArray.length > 0 && (
                <MyCarousel input={false} images={receivedArray} />
              )}
            </div>
          </div>
        )}

        {file.length > 0 && receivedArray.length === 0 && (
          <div className="w-full sm:w-1/2 mx-auto grid grid-cols-1 px-8 gap-6 mb-5">
            <div className=" rounded-md mt-0 sm:mt-12 p-8 space-y-8 bg-green-900">
            <span className="font-logo text-xl sm:text-4xl  my-8 block text-center text-green-200"> Input </span>
              {file !== null && receivedArray !== null && file.length > 0 && (
                <MyCarousel input={true} images={convertFileListToArray(file)} />
              )}
            </div>
          </div>
        )}
      



        <Box className="flex items-center justify-center"> 
          {file &&file.length > 0 ? (<span className="font-roboto text-white text-xl sm:text-2xl"> Images Uploaded: <span className="text-green-200"> {file.length} </span></span>) : (<span className="text-white text-2xl font-roboto block mt-10"> <span className="text-green-200"> Start </span> By Uploading an Image!</span>)}
        </Box>

        <Box className="flex flex-row"> 
            <Box className="mx-auto py-5 text-center space-x-4">
              <Button className="" onClick = {imageRefHandler}
              isDisabled = {isLoading}
              colorScheme="green"
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
        </div>
        </section>

        

          
        </Box>
    )
}