export default function useHandlerFunctions(
  activeIndex,
  setActiveIndex,
  translateValue,
  previousTranslateValue,
  setPreviousTranslateValue,
  sliderContainerWidth,
  items,
) {
  function handleNext() {
    if (activeIndex === items.length - 1) return;
  
    const currentIndex = activeIndex;
    const sliderWarper = document.querySelector('.slider-wrapper');
    const sliderItems = document.querySelectorAll('.slider-item');
    const currentActiveItem = sliderItems[currentIndex];
    const nextActiveItem = sliderItems[currentIndex + 1];
  
    prepareActiveItemForTransition(currentActiveItem, "right");
  
    setTimeout(() => {
      updateSliderItemsForNext(currentActiveItem, nextActiveItem, sliderContainerWidth);
      applyTranslateX(sliderWarper, -translateValue);
  
      setTimeout(() => {
        finalizeTransition(currentActiveItem, nextActiveItem);
        updateSliderState(currentIndex + 1);
      }, 300);
    }, 300);
  }
  
  function handlePrev() {
    if (activeIndex === 0) return;
  
    const currentIndex = activeIndex;
    const sliderWarper = document.querySelector('.slider-wrapper');
    const sliderItems = document.querySelectorAll('.slider-item');
    const currentActiveItem = sliderItems[currentIndex];
    const prevActiveItem = sliderItems[currentIndex - 1];
  
    prepareActiveItemForTransition(currentActiveItem, "left");
  
    setTimeout(() => {
      updateSliderItemsForPrev(currentActiveItem, prevActiveItem, sliderContainerWidth);
      applyTranslateX(sliderWarper, translateValue);
  
      setTimeout(() => {
        finalizeTransition(currentActiveItem, prevActiveItem);
        updateSliderState(currentIndex - 1);
      }, 300);
    }, 300);
  }
  
  function prepareActiveItemForTransition(item, margin) {
    const sliderContent = item.querySelectorAll(".slider-content");
    sliderContent.forEach(content => {
      content.style.opacity = 0;
      setTimeout(() => {
        content.style.display = 'none';
      }, 100);
    });
  
    const sliderTopSection = item.querySelector(".slider-top-section");
    sliderTopSection.style.height = '100%';
    sliderTopSection.style.width = '100%';
  
    const sliderImage = item.querySelector("img");
    sliderImage.style.width = '100%';
    sliderImage.style.aspectRatio = '1/1';
  }
  
  function updateSliderItemsForNext(currentItem, nextItem, containerWidth) {
    currentItem.style.width = `${containerWidth / 7}px`;
    nextItem.style.width = `${(containerWidth / 7) * 3}px`;
  
    const contentContainer = currentItem.querySelector(".content-container");
    contentContainer.style.aspectRatio = '1/1';
    contentContainer.style.width = '50%';
    contentContainer.style.borderRadius = '50%';
  
    const nextContentContainer = nextItem.querySelector(".content-container");
    nextContentContainer.style.width = '100%';
    nextContentContainer.style.aspectRatio = '3/2';
    nextContentContainer.style.borderRadius = '0%';
  }
  
  function updateSliderItemsForPrev(currentItem, prevItem, containerWidth) {
    currentItem.style.width = `${containerWidth / 7}px`;
    prevItem.style.width = `${(containerWidth / 7) * 3}px`;
  
    const contentContainer = currentItem.querySelector(".content-container");
    contentContainer.style.aspectRatio = '1/1';
    contentContainer.style.width = '50%';
    contentContainer.style.borderRadius = '50%';
  
    const prevContentContainer = prevItem.querySelector(".content-container");
    prevContentContainer.style.width = '100%';
    prevContentContainer.style.aspectRatio = '3/2';
    prevContentContainer.style.borderRadius = '0%';
  }
  
  function applyTranslateX(wrapper, valueChange) {
    const transform = window.getComputedStyle(wrapper).transform;
    let currentTranslateX = 0;
  
    if (transform !== "none") {
      const matrixValues = transform.match(/matrix.*\((.+)\)/);
      if (matrixValues) {
        currentTranslateX = parseFloat(matrixValues[1].split(", ")[4]);
      }
    }
  
    wrapper.style.transform = `translateX(${currentTranslateX + valueChange}px)`;
  }
  
  function finalizeTransition(currentItem, newItem) {
    currentItem.classList.remove('active');
    newItem.classList.add('active');
  
    const sliderImage = newItem.querySelector("img");
    sliderImage.style.width = '15%';
    sliderImage.style.aspectRatio = '1/1';
  
    const sliderTopSection = newItem.querySelector(".slider-top-section");
    sliderTopSection.style.height = '30%';
  
    const sliderContent = newItem.querySelectorAll(".slider-content");
    sliderContent.forEach(content => {
      content.style.display = 'block';
      setTimeout(() => {
        content.style.opacity = 1;
      }, 300);
    });
  }
  
  function updateSliderState(newIndex) {
    setPreviousTranslateValue(previousTranslateValue + translateValue * (newIndex - activeIndex));
    setActiveIndex(newIndex % items.length);
  }
  
  

  return [handleNext, handlePrev];
}