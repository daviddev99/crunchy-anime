import React from "react";
import Image from "next/image";

interface Anime {
    id: string,
    image: {
        original: string
    },
    name: string,
    kind: string,
    episodes: number,
    score: string 
}

interface Prop {
    item: Anime;
}

export const AnimeCard = ({item}: Prop) => {
  return (
    <div key={item.id} className="flex flex-col gap-2 text-white">
      <div className="w-full relative h-[40vh]">
        <Image
          src={item.image.original}
          alt={item.name}
          fill
          className="rounded-xl object-cover"
        />
      </div>
      <div className="flex justify-between">
        <p>{item.name}</p>
        <p>{item.kind}</p>
      </div>
      <div className="flex gap-4">
        <div className="flex gap-2">
          <Image alt="episodes" src={"/episodes.svg"} width={20} height={30} />
          <span>{item.episodes}</span>
        </div>
        <div className="flex gap-2">
          <Image alt="star" src={"/star.svg"} width={20} height={30} />
          <span>{item.score}</span>
        </div>
      </div>
    </div>
  );
};

