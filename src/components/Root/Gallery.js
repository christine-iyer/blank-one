import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < sculptureList.length - 1;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
     
      <h2>
        <i>{sculpture.title} </i>
        by {sculpture.author}
      </h2>


      {showMore && <p>{sculpture.text}</p>}
     
    <span> <img
        src={sculpture.image}
        alt=''
      />      <h6>
        ({index + 1} of {sculptureList.length})
      </h6></span> 
     
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
<button onClick={handleNextClick}>
        Next
      </button>
    </>
  );
}
