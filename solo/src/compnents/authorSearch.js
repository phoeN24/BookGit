// render search bars and buttons
import React, {useState} from "react";

const AuthorSearches = () => {
 
  const [results, updateResults] = useState('');

  const handleAuthorClick = () => {
    fetch('/').then().then ()
  }

  return (
    <div>
        <div ig='SBA'>
          <form>Search By Author</form>
          <input id='ALSin' type='text' placeholder="Author Last Name"></input>
          <input id='AFNin' type='text' placeholder="Author First Name"></input>
          <button name="AS" type="button"> search</button>
        </div> 
      </div>
      
  )
}

export default AuthorSearches;
