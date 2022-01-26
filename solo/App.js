//parent of serches
import React from "react";
import AuthorSearches from "./src/compnents/authorSearch";
import TitleSearch from "./src/compnents/titleSearch";
const App = props => {
    return(
      <div className="router">
        <AuthorSearches />
        <TitleSearch />
      </div>
    )
}

export default App;