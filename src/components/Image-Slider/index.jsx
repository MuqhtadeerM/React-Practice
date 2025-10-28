import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlider] = useState(0);
  const [errorMsg, setErrorHandling] = useState(null);
  const [loading, setLoading] = useState(false);

  // fetching data from API
  const fetchMsg = async (getUrl) => {
    // error handling
    try {
      setLoading(true);

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      console.log(data);
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorHandling(e.message);
      setLoading(false);
    }
  };

  const handlePrev = () => {
    setCurrentSlider(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlider(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  //calling Async opperations
  useEffect(() => {
    if (url !== "") fetchMsg(url);
  }, [url]);

  // adding a loader wait a function untill load data
  if (loading) {
    return <div>Loading Wait...</div>;
  }

  if (errorMsg !== null) {
    return <div>Error Accured {errorMsg}</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrev}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((ImageItem, index) => (
            <img
              key={ImageItem.id}
              alt={ImageItem.download_url}
              src={ImageItem.download_url}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}

      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-image inactive-indicator"
                }
                onClick={() => setCurrentSlider(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
