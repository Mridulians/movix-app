import React from "react";
const API_KEY = "0ab1b2e9c856d12185bc28a0ac01213e";
import Results from "@/components/Results";

const SearchPage = async ({ params }) => {
  const searchTerm = params.searchTerm;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`
  );

  const data = await res.json();
  const results = data.results;
  return (
    <div>
      {results &&
        results.length ===
          (<h1 className="text-center pt-6">No results found</h1>)}

      {results && <Results results={results} />}
    </div>
  );
};

export default SearchPage;
