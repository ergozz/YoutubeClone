import React, { useState } from 'react'

const StringArea = ({ text, max }) => {
    const [expand,setExpand] = useState(false);
    let shortText = text;

    if(text.length > max && !expand) {
        shortText = text.slice(0,max) + '...more';
    }
    //   console.log(text);

  return (
    <p onClick={() => setExpand(!expand)}>{shortText.split("\n").map((line, i) => (
        // eslint-disable-next-line react/jsx-key
        <span> key={i} {line} <br /> </span>
    )) } </p>
  );
};

export default StringArea;



