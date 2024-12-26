import { useEffect } from "react";

export default function useSetDefaultValues(
  setSliderContainerWidth,
  activeIndex,
  setTranslateValue,
  sliderContainerWidth,
  setPreviousTranslateValue
) {
  // setting default values for the slider
  useEffect(() => {
    const sliderContainer = document.querySelector('.slider-container');

    // get and set slider container width
    const sliderContainerWidth = sliderContainer.getBoundingClientRect().width;
    setSliderContainerWidth(sliderContainerWidth);
  });

  // set default active item style
  useEffect(() => {
    const sliderItems = document?.querySelectorAll('.slider-item');
    const activeItem = sliderItems[activeIndex];

    const sliderImage = activeItem?.querySelector("img");
    sliderImage.style.width = '15%';
    sliderImage.style.aspectRatio = '1/1';

    // decrease top section height
    const sliderTopSection = activeItem.querySelector(".slider-top-section");
    sliderTopSection.style.height = '30%';

    // display block slider content smoothly
    const sliderContent = activeItem?.querySelectorAll(".slider-content");
    sliderContent.forEach(item => {
      item.style.display = 'block';
      item.style.opacity = '1';
      
    });

    activeItem?.classList?.add('active');

    setTranslateValue(sliderContainerWidth/7);
    setPreviousTranslateValue(-((sliderContainerWidth/7) * 2));

  }, [sliderContainerWidth]);
  return;
}
