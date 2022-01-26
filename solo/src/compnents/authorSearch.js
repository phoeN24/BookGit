// render search bars and buttons
import React, {useState} from "react";

const AuthorSearches = () => {
 
  const [results, updateResults] = useState('');

  const handleAuthorClick = () => {
    fetch('/').then().then ()
  }

  return (
    <div>
      <div>Search By Author</div>
      <input type='text' placeholder="Author Last Name"></input>
      <input type='text' placeholder="Author First Name"></input>
      <button name="AS" type="button"> search</button>
    </div>
  )
}

const TitleSearch = () => {

  return(
    <div>
      <div>Search by Title</div>
      
    </div>
  )
}

export default AuthorSearches;
