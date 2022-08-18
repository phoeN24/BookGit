import React, {useState} from "react";


const TitleSearch = () => {

  return(
    <div>
        <div id='SBT'> 
          <form> Search by Title</form>
          <input id='TI' type='text' placeholder="Title"></input>
        <button id="TS" type="button"> search</button>
        </div>
    </div>
  )
}

export default TitleSearch;