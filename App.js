//parent of serches
import React from "react";
import AuthorSearches from "./src/components/authorSearch";
import GenreSearches from "./src/components/genreSearch";
import TitleSearch from "./src/components/titleSearch";
const App = props => {
    return(
      <div className="router">
        <AuthorSearches />
        <TitleSearch />
        <GenreSearches/>
      </div>
    )
}

export default App;