//parent of serches
import React from "react";
import AuthorSearches from "./src/compnents/authorSearch";
import GenreSearches from "./src/compnents/genreSearch";
import TitleSearch from "./src/compnents/titleSearch";
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