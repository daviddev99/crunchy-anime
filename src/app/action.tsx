"use server";

import { AnimeCard } from "../components/AnimeCard";
export const fetchAnime = async (page: number) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );
  const data = await response.json();
  // console.log(data);
  return data.map(
    (
      item: {
        id: string;
        image: {
          original: string;
        };
        name: string;
        kind: string;
        episodes: number;
        score: string;
      },
      index: number
    ) => <AnimeCard item={item} key={item.id} index={index} />
  );
};
