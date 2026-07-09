import { useEffect, useMemo, useState } from "react";
import { shuffleArray } from "../utils/shuffle";

const MemoryGame = ({ images = [] }) => {
  const [openedImage, setOpenedImage] = useState();
  const [lastImage, setLastImage] = useState("");
  const [lastIndex, setLastIndex] = useState();
  const [validImages, setValidImages] = useState([]);

  const cardImages = useMemo(() => [...images, ...images], [images]);
  const shuffledImages = useMemo(() => shuffleArray(cardImages), [cardImages]);

  const onItemClicked = (image, index) => {
    if (openedImage !== index || validImages.includes(image)) {
      setOpenedImage(index);
      checkValidImage(image, index);
    }
  }

  const checkValidImage = (image, index) => {
    if (lastImage === image && lastIndex !== index) {
      setValidImages(values => [...values, image]);
    } else {
      setLastImage(image);
      setLastIndex(index);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenedImage()
      setLastImage()
      setLastIndex()
    }, 2000);

    return () => clearTimeout(timer)
  }, [openedImage])

  return (
    <div className="grid-container">
      {shuffledImages?.map((image, index) => (
        <div key={index} className="grid-item border" onClick={() => onItemClicked(image, index)}>
          <div
            className={["grid-image", (openedImage === index || validImages.includes(image)) && 'open'].join(" ")}
            style={{ backgroundImage: `url(${image})` }}
          />
        </div>
      ))}
    </div>
  )
}

export default MemoryGame;
