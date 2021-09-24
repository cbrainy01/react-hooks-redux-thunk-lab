import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchCats} from "../../state/action-creators/catActions"
import CatList from "./CatList"

function Cats() {
  const dispatch = useDispatch()
  const catPics = useSelector( (state) => state.catsInfo.entities )

  useEffect(() => {
    dispatch( fetchCats() )
  }, [])

  console.log("cp: ", catPics)
  return (
    <div>
      <h1>CatBook</h1>
      {/* add CatList component here */}
      <CatList catPics={catPics}/>
    </div>
  );
}

export default Cats;
