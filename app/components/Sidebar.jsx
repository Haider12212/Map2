import React,{useState} from "react";
import Image from "next/image";
import VideoAfg from "./AfghanistanVideo";
import ImageSlider from "./ImageSlider";
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
const Sidebar = ({ isOpen, onClose,toggleVideo }) => {
  const images = [
    "assets/Afgslides/1.jpg",
    "assets/Afgslides/2.jpg",
    "assets/Afgslides/3.jpg"
];
const captions = [
  'Caption for Image 1',
  'Caption for Image 2',
  'Caption for Image 3',
];
  
  const [imageStyle, setImageStyle] = useState({});
  const [playVideo, setPlayVideo] = useState(false);

  const handleMouseMove = (event) => {
    const image = event.target;
    const { left, top, width, height } = image.getBoundingClientRect();
    const x = (event.clientX - left) / width;
    const y = (event.clientY - top) / height;
    const transform = `scale(1.1) translate(${x * 20}px, ${y * 20}px)`;
    setImageStyle({ transform });
  };

  const handleMouseLeave = () => {
    setImageStyle({});
  };
  const handleClickVideo = () => {
    toggleVideo(); // Call the toggleVideo function to show/hide the video component
  };
  return (
    
    <div className="z-[9999]">
      {playVideo && <VideoAfg />}
    <div
      className={`fixed top-0 left-20 p-10 h-full max-w-7xl transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition duration-300 ease-in-out`}
      style={{ zIndex: isOpen ? 1000 : -1 }}
    >
      <Image
        src="./assets/map/afgMap.png"
        alt="bg"
        width={1000}
        height={800}
        
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={imageStyle}
      />
    </div>

      <div
        className={`fixed top-0 right-0 h-full max-w-7xl bg-black bg-opacity-40 p-4 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition duration-300 ease-in-out`}
        style={{ zIndex: isOpen ? 1000 : -1 }}
      >
        <button
          className="absolute bottom-2 left-2 text-orange-600 text-4xl" // Updated position to bottom-left
          onClick={onClose}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="mb-4">
          <Image src="./assets/map/Thumbnail.gif" alt="bg" width={500} height={400} />
          <button className="mt-5 px-2 py-3 border border-[#258D95] hover:text-[#fff] hover:bg-[#258D95] transition ease-in-out duration-100" onClick={handleClickVideo}>
            Play Video
          </button>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2">Afghanistan</h2>
          <p className="text-[#eee] w-96">
            In Western Kabul, AKU emerges as a lifeline, reconstructing the shattered healthcare system. At the French Medical Institute for Mother and Child (FMIC), the only hospital in Afghanistan equipped to save lives, AKU`&apos;` impact is undeniable. With partnerships, a regional healthcare system, and dedicated professionals, AKU is not only reviving medical education but also shaping a better future for Afghanistan`&apos;`s healthcare.
            {/* Add more information about Afghanistan here */}
          </p>
        </div>
        
        <div className="mt-4 absolute">
          <h2 className="text-lg font-bold mb-2">Key Facts</h2>
          <Accordion>
            <AccordionItem header="AKU in Afghanistan">
              {/* Adjust the size of the ImageSlider container here */}
              <div className="w-80 h-60">
                <ImageSlider images={images} captions={captions} />
              </div>
            </AccordionItem>
          </Accordion>
        </div>


      </div>
    </div>
  );
};

export default Sidebar;
