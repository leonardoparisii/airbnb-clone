"use client";
import Container from "../../Container";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import CategoryBox from "../../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import { IoDiamond } from "react-icons/io5";
import CarouselArrow from "../CarouselArrow";
import { useEffect, useRef, useState } from "react";
import styles from './page.module.css'

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    desc: "This property is close to the beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    desc: "This property has windmills!",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    desc: "This property is modern!",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    desc: "This property is in the countryside!",
  },
  {
    label: "Pools",
    icon: TbPool,
    desc: "This property has a pool!",
  },
  {
    label: "Islands",
    icon: GiIsland,
    desc: "This property is on a island!",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    desc: "This property is close to a lake!",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    desc: "This property has skiing activities!",
  },
  {
    label: "Castles",
    icon: GiCastle,
    desc: "This property is in a castle!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    desc: "This property has camping activities!",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    desc: "This property is in the arctic!",
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    desc: "This property is in a cave!",
  },
  {
    label: "Desert",
    icon: GiCactus,
    desc: "This property is in the desert!",
  },
  {
    label: "Barns",
    icon: GiBarn,
    desc: "This property is in the barn!",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    desc: "This property is luxurious!",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const isMainPage = pathname === "/";
  const carouselRef = useRef<HTMLDivElement>(null);
  const [carouselWidth, setCarouselWidth] = useState('left');

  if (!isMainPage) {
    return null;
  }
  
  const handleArrowClick = (direction: "left" | "right"): void => {
    setCarouselWidth(direction);
    const carousel = carouselRef.current as HTMLDivElement;
    if (carousel) {
      if (direction === "left") {
        carousel.scrollTo({ left: 0, behavior: "smooth" });
      } else if (direction === "right") {
        const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
        carousel.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
      }
    }
  };
  
  

  return (
    <Container>
      <div className="flex items-center justify-center">
        {carouselWidth == 'right' ? (
          <CarouselArrow dir='left' onClick={() => handleArrowClick('left')}/>
        ) : null}
        <div
          className={`
              pt-5
              flex 
              flex-row 
              items-center
              xl:justify-center
              gap-4
              md:overflow-x-hidden
              md:overflow-y-hidden
              transition-all
              overflow-x
              ${styles.container}
              ${carouselWidth == 'left' ? 'pl-4' : 'pr-4'}
            `}
              ref={carouselRef}
        >
              {categories.map((item) => (
                  <CategoryBox
                      key={item.label}
                      label={item.label}
                      selected={category === item.label}
                      icon={item.icon}
                  />
              ))}
        </div>
        {carouselWidth == 'left' ? (
          <CarouselArrow dir='right' onClick={() => handleArrowClick('right')}/>
        ) : null}
      </div>
    </Container>
  );
};
export default Categories;
