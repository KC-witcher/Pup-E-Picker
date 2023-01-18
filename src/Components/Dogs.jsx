import { useState, useEffect } from "react";
import { DogCard } from "./DogCard";

export const Dogs = (dogs, setDogId, setDogFavStatus) => {
  const [dogIdUpdate, setDogIdUpdate] = useState();
  useEffect(() => {
    console.log(dogIdUpdate);
  }, [dogIdUpdate]);

  return (
    //  the "<> </>"" are called react fragments, it's like adding all the html inside
    // without adding an actual html element
    <>
      {dogs.dogs.map((dog) => (
        <DogCard
          dog={dog}
          key={dog.id}
          getDogIdDogCard={setDogIdUpdate}
          // getDogFavStatusDogCard={dogFavStatus}
        />
      ))}
    </>
  );
};
