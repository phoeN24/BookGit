//parent of serches

import React from "react";

import searches from './src/compnents/Searches'

const App = props => {
    return(
      <div className="router">
        <main>
          <switch>
            <Route 
              exact path="/"
              component={searches}
            />
          </switch>
        </main>
      </div>

    )
}

export default App;