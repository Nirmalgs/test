import React, { useState, useEffect, useRef } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import VContainer from "../VContainer";
import Grid from "@/components/Grid";
import Image from "next/image";

export interface VSliderProps {
  images: string[];
  mainImageWidth?: number;
  mainImageHeight?: number;
  thumbnailWidth?: number;
  thumbnailHeight?: number;
}

const VSlider: React.FC<VSliderProps> = ({
  images,
  mainImageWidth = 600,
  mainImageHeight = 600,
  thumbnailWidth = 100,
  thumbnailHeight = 100,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const splideRef = useRef<any>(null);

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
    splideRef.current.splide.go(index);
  };

  useEffect(() => {
    if (splideRef.current) {
      splideRef.current.splide.on("moved", (splide: any) =>
        setActiveIndex(splide.index)
      );
    }
  }, []);

  return (
    <VContainer maxWidth="lg" fixed>
      <Splide
        options={{
          type: "loop",
          perPage: 1,
          perMove: 1,
          arrows: false,
          pagination: true,
          autoplay: true,
        }}
        ref={splideRef}
        hasTrack={false}
      >
        <SplideTrack>
          {images.map((image, index) => (
            <SplideSlide key={index}>
              <Image
                src={image}
                alt={`Product image ${index + 1}`}
                width={mainImageWidth}
                height={mainImageHeight}
                objectFit="cover"
              />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
      <Grid  spacing={2} className="mt-4">
        {images.map((image, index) => (
          <Grid  xs={3} key={index}>
            <button onClick={() => handleThumbnailClick(index)}>
              <Image
                src={image}
                alt={`Thumbnail image ${index + 1}`}
                width={thumbnailWidth}
                height={thumbnailHeight}
                objectFit="cover"
                className={`cursor-pointer ${index === activeIndex ? "border border-blue-500" : ""}`}
              />
            </button>
          </Grid>
        ))}
      </Grid>
    </VContainer>
  );
};

export default VSlider;
