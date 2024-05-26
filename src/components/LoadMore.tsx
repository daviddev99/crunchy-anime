"use client";

import { fetchAnime } from "@/app/action";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export type AnimeCard = JSX.Element;
let page = 2;

export const LoadMore = () => {
  const { ref, inView } = useInView();
  const [data, setData] = useState<AnimeCard[]>([]);
  useEffect(() => {
    if (inView) {
      fetchAnime(page).then((res) => {
        setData([...data, ...res]);
        page++;
      });
    }
  }, [inView, data]);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {data}
      </div>
      <div className="flex justify-center items-center w-full pt-10" ref={ref}>
        <Image src={"/spinner.svg"} alt="loading" width={56} height={56} />
      </div>
    </>
  );
};
