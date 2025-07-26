import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";


export default function ImageCarousel({ images }) {
  const [zoomImage, setZoomImage] = useState(null);
  const [showClose, setShowClose] = useState(false);

  // Handle browser/mobile back button
  useEffect(() => {
    const handlePopState = (e) => {
      if (zoomImage) {
        setZoomImage(null);
        e.preventDefault();
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [zoomImage]);

  useEffect(() => {
    if (zoomImage) {
      window.history.pushState({ zoom: true }, "Zoomed");
    }
  }, [zoomImage]);

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      setZoomImage(null);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-6">
      {/* Play Store Style Scrollable Screenshots */}
      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
        {images.map((image, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-48 sm:w-56 md:w-64 lg:w-72 cursor-pointer"
            onClick={() => setZoomImage(image)}
          >
          <img
  src={image}
  alt={`Slide ${idx + 1}`}
  className="
    max-w-full h-auto object-contain rounded-xl shadow-md bg-gray-50 dark:bg-gray-800 cursor-pointer
    md:max-h-[500px] lg:max-h-[500px]
  "
/>


          </div>
        ))}
      </div>

      {/* Zoom Modal */}
      {zoomImage && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50"
          onClick={handleBackgroundClick}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] p-4"
            onMouseEnter={() => setShowClose(true)}
            onMouseLeave={() => setShowClose(false)}
          >
            {/* Close Button (appears on hover/tap) */}
            <button
              onClick={() => setZoomImage(null)}
              className={`absolute top-4 right-4 bg-gray-800 text-white rounded-full px-3 py-2 text-xl transition-opacity duration-200 ${
                showClose ? "opacity-100" : "opacity-0"
              } hover:bg-gray-700`}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <img
              src={zoomImage}
              alt="Zoomed"
              className="max-h-[80vh] max-w-full rounded-lg shadow-lg object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
