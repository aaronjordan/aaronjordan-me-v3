"use client";

import { Carousel as ArkCarousel } from "@ark-ui/react";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Chunk } from "$types/payload-types";
import style from "./style.module.scss";
import { IconButton } from "../IconButton";

type PayloadCarousel = Chunk["content"][number] & { blockType: "carousel" };

interface CarouselProps {
  src: PayloadCarousel;
}

export function Carousel({ src }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <ArkCarousel.Root
      className={style.carousel}
      index={currentIndex}
      loop
      onIndexChange={(details) => setCurrentIndex(details.index)}
      asChild
    >
      <figure>
        {src.name && <h3>{src.name}</h3>}
        <div>
          <ArkCarousel.Viewport>
            <ArkCarousel.ItemGroup>
              {src.images.map((meta: any, index) =>
                meta.image?.url ? (
                  <ArkCarousel.Item key={index} index={index}>
                    <img alt={meta.image.alt} src={meta.image.url} />
                  </ArkCarousel.Item>
                ) : (
                  <></>
                )
              )}
            </ArkCarousel.ItemGroup>
          </ArkCarousel.Viewport>

          <ArkCarousel.Control>
            <ArkCarousel.PrevTrigger asChild>
              <IconButton
                ariaLabel="Previous slide"
                filled
                icon={<ChevronLeftIcon />}
                size="1.5rem"
              />
            </ArkCarousel.PrevTrigger>
            <ArkCarousel.NextTrigger asChild>
              <IconButton
                ariaLabel="Next slide"
                filled
                icon={<ChevronRightIcon />}
                size="1.5rem"
              />
            </ArkCarousel.NextTrigger>
          </ArkCarousel.Control>
        </div>
        {src.images[currentIndex].caption ? (
          <figcaption>{src.images[currentIndex].caption}</figcaption>
        ) : (
          <></>
        )}
      </figure>
    </ArkCarousel.Root>
  );
}
