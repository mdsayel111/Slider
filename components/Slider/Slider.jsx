import EmptyCard from './components/EmptyCard';
import SliderCard from './components/SliderCard';

export default function Slider({data, activeIndex, sliderContainerWidth, handleNext, handlePrev, prevTranslateValue}) {
  const items = data;
  return (
    <div className="w-full slider-container absolute z-[100] pb-8 h-fit bottom-0">
        <div className=" flex items-end w-fit slider-wrapper duration-1000 transition-all" style={{ transform: `translateX(-${(sliderContainerWidth /7) * 2}px)` }}>
          <EmptyCard className="active" index={-1} activeIndex={activeIndex} sliderContainerWidth={sliderContainerWidth} />
          <EmptyCard className="active" index={-2} activeIndex={activeIndex} sliderContainerWidth={sliderContainerWidth} />
          {items.map((item, index) => (
            <>
            {console.log(index)}
            <SliderCard index={index} item={item} activeIndex={activeIndex} sliderContainerWidth={sliderContainerWidth} handleNext={handleNext} handlePrev={handlePrev} />
            </>
          ))}
        <EmptyCard className="active" index={items.length} activeIndex={activeIndex} sliderContainerWidth={sliderContainerWidth} />
        <EmptyCard className="active" index={items.length + 1} activeIndex={activeIndex} sliderContainerWidth={sliderContainerWidth} />
        </div>
      </div>
  )
}
