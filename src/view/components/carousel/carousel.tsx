import { useState } from "react";
import { type CarouselCardParametters } from './carousel-card';

type CarouselItems = {
  items: CarouselCardParametters[];
}

export default function Carousel({ items }: CarouselItems) {
  
//   function nextSlide() {
//     setCurrent((prev) => (prev + 1) % items.length);
//   }

//   function prevSlide() {
//     setCurrent((prev) =>
//       prev === 0 ? items.length - 1 : prev - 1
//     );
//   }

  
}