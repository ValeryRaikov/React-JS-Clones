import { useLocation } from "react-router-dom";

import Navigation from "../navigation/Navigation";
import SearchMovieItem from "../search-movie-item/SearchMovieItem";

export default function SearchMovie() {
    const location = useLocation();
    const searchResults = location.state?.results;

    return (
        <>
            <Navigation />
            <div className="search-movie">
                <h1>Found {searchResults.length} movies</h1>
                <div className="search-results">
                    {searchResults.length > 0 
                        ? searchResults.map((result) => (
                            <SearchMovieItem
                                key={result.id}
                                id={result.id}
                                backdrop_path={result.backdrop_path}
                                original_title={result.original_title}
                            />
                            )) 
                        : <p className="error-msg">No results found</p>
                    }
                </div>
            </div>
        </>
    );
}