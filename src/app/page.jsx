import React from "react";
// const API_KEY = process.env.API_KEY;
const API_KEY = "0ab1b2e9c856d12185bc28a0ac01213e";

import Results from "@/components/Results";

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error("failed to fetch data");
  }

  const results = data.results;
  // console.log(results);

  return (
    <div>
      <Results results={results} />
    </div>
  );
}