import React , {useState, useEffect} from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function MyCarousel(props) {
  const [cards, setCards] = useState([]);

  const convertFileToDataURI = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(file);
    });
  };

  useEffect(() => {
    if (props.input) {
    const convertFilesToDataURIs = async () => {
      const dataURIs = await Promise.all(props.images.map(convertFileToDataURI));
      setCards(dataURIs);
    };
    convertFilesToDataURIs();
  } else {
    setCards(props.images)
  }
  }, [props.images]);


  return (
      <div> 
        {props.input && <Carousel showArrows autoPlay infiniteLoop stopOnHover  centerMode dynamicHeight>
        {cards.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index}`}  className='object-contain '/>
          </div>
        ))}
        </Carousel>}

        {!props.input && <Carousel showArrows autoPlay infiniteLoop stopOnHover centerMode dynamicHeight>
        {cards.map((image, index) => (
          <div key={index}>
            <img src={`data:image/jpeg;base64, ${image}`}  alt = "" className="object-contain" key = {index}/>
          </div>
        ))}
        </Carousel>}
      </div>
      
  );
}