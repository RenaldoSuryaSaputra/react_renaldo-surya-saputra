import React, { useState, useEffect } from 'react';

import Logo from "../../img/bootstrap_logo.png";
import { article } from "../../assets/data"

const Heading = () => {
  const [title, setTitle] = useState(article.title.en)
  const [description, setDescription] = useState(article.description.en)
  const [buttonName, setButtonName] = useState("Change to ID")
  const [buttonStatus, setButtonStatus] = useState("ID")


  const handleClick = () => {
    if (buttonStatus === "EN") {
      setButtonName("Change to ID")
      setTitle(article.title.en)
      setDescription(article.description.en)
      setButtonStatus("ID")
    } else {
      setButtonName("Ganti ke EN")
      setTitle(article.title.id)
      setDescription(article.description.id)
      setButtonStatus("EN")
    }
  }

  return (
    <>
      <div className="text-center mt-5">
        <img src={Logo} alt="Logo" width={100} />
        <h1 className="mt-4"> {title} </h1>
        <div className="row justify-content-center">
          <p className="col-md-8">
            {description}
          </p>

        </div>
        <p></p>
        <button className="btn btn-outline-secondary" onClick={handleClick}> {buttonName} 
        </button>
      </div>
    </>
  );
}
export default Heading;
