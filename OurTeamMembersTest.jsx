import Image from "next/image";
import React, { act, useEffect, useState } from "react";
import "./OurTeamMembersTest.css";
import useSetDefaultValues from "./utils/hooks/useSetDefaultValues";
import useHandlerFunctions from "./utils/hooks/useHandlerFunctions";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { IMAGE_SPACES_URL } from "@/utils/APIS/websiteContentApi/websiteContentApi";
import BackgroundImage from "./components/BackgroundImage";
import SliderCard from "./components/Slider/components/SliderCard";
import Slider from "./components/Slider/Slider";

export default function OurTeamMembersTest({ data }) {
  const [activeIndex, setActiveIndex] = useState(2);
  const [translateValue, setTranslateValue] = useState(0);
  const [previousTranslateValue, setPreviousTranslateValue] = useState(0);
  const [sliderContainerWidth, setSliderContainerWidth] = useState(0);

  const [items, setItems] = useState(data);

  const [handleNext, handlePrev] = useHandlerFunctions(
    activeIndex,
    setActiveIndex,
    translateValue,
    previousTranslateValue,
    setPreviousTranslateValue,
    sliderContainerWidth,
    items,
    setItems,
    data
  );

  useSetDefaultValues(
    setSliderContainerWidth,
    activeIndex,
    setTranslateValue,
    sliderContainerWidth,
    setPreviousTranslateValue
  );


  return (
    <div className="border max-w-[1920px] mx-auto overflow-hidden relative h-[90vh] my-8 lg:my-24">
      <BackgroundImage data={items[activeIndex]} />
      <Slider data={items} activeIndex={activeIndex} sliderContainerWidth={sliderContainerWidth} handleNext={handleNext} handlePrev={handlePrev} previousTranslateValue={previousTranslateValue}  />
    </div>
  );
}
