'use client';
import { useState, useEffect, useRef, Fragment } from 'react';
import { CardComponent } from '@/components/display/Card';
import { StyledCarouselWrapper, StyledSectionContent, StyledCarouselIndexWrapper, StyledCarouselIndexButton } from '@/utils/styledComponent';
import CircleIcon from '@mui/icons-material/Circle';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { CardProps } from '@/types/types';

interface CarouselProps {
  data: CardProps[];
}

export const Carousel: React.FC<CarouselProps> = ({data}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > observer.thresholds[0]) {
          const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
          // prevent overshoot of increment or decrement of activeIndex
          if (index !== -1 && index !== activeIndex) setActiveIndex(index);
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersect, {
      root: carouselRef.current,
      rootMargin: "0px",
      threshold: 0.55
    });
    if (carouselRef.current) {
      cardRefs.current.forEach(card => {
        if (card) {
          observer.observe(card);
        }
      });
    }
    return () => {
      observer.disconnect();
    };
  }, [activeIndex]);

  const scrollTo = (index: number) => {
    const targetCard = cardRefs.current[index];
    if (targetCard) targetCard.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
    else console.debug(`Index ${index} unexpected`)
  }

  // fallback when data fetching is unsuccessful
  if (data.length === 0) {
    return (
    <StyledCarouselWrapper>
      <StyledSectionContent>
        No Project Found...
      </StyledSectionContent>
    </StyledCarouselWrapper>
  )}
  return (
    <Fragment>
      <StyledCarouselWrapper ref={carouselRef}>
        {data.map((cardProps, index) => {
          return (
            <div key={index} ref={(element)=>{cardRefs.current[index] = element}} style={{position: 'relative'}}>
              <CardComponent {...cardProps} />
            </div>
          )
        })}
      </StyledCarouselWrapper>
      <StyledCarouselIndexWrapper>
        {<StyledCarouselIndexButton
          size='medium'
          disableRipple={true}
          onClick={()=>scrollTo(activeIndex-1)}>
          <ArrowBackIosIcon fontSize="inherit"/>
        </StyledCarouselIndexButton>}
        <div>
          {[...Array(data.length).keys()].map((index)=>{
            return (
              <StyledCarouselIndexButton key={index}
                size={(index === activeIndex) ? 'medium' : 'small'}
                disableRipple={true}
                onClick={()=>scrollTo(index)}
                >
                <CircleIcon fontSize="inherit"/>
              </StyledCarouselIndexButton>
            )
          })}
        </div>
        {<StyledCarouselIndexButton
          size='medium'
          disableRipple={true}
          onClick={()=>scrollTo(activeIndex+1)}>
          <ArrowForwardIosIcon fontSize="inherit"/>
        </StyledCarouselIndexButton>}
      </StyledCarouselIndexWrapper>
    </Fragment>
  );
};