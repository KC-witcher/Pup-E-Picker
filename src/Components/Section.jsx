import { useEffect } from "react";
import { useState } from "react";
import { CreateDogForm } from "./CreateDogForm";
import { DogCard } from "./DogCard";

export const Section = ({
  label,
  favoriteCount,
  unfavoriteCount,
  allDogsList,
  setCurrDogId,
  setCurrDogStatus,
}) => {
  const [favActive, setFavActive] = useState(false);
  const [unfavActive, setUnFavActive] = useState(false);
  const [createActive, setCreateActive] = useState(false);
  const [specificDogs, setSpecificDogs] = useState("all");
  const [cardDogs, setCardDogs] = useState([]);

  useEffect(() => {
    if (specificDogs === "all") {
      setCardDogs(allDogsList);
    } else if (specificDogs === "fav") {
      setCardDogs(allDogsList.filter((dog) => dog.isFavorite));
    } else if (specificDogs === "unfav") {
      setCardDogs(allDogsList.filter((dog) => !dog.isFavorite));
    }
  }, [specificDogs]);

  const toggleFav = () => {
    if (favActive) {
      setFavActive(false);
      setSpecificDogs("all");
    } else {
      setFavActive(true);
      setUnFavActive(false);
      setCreateActive(false);
      setSpecificDogs("fav");
    }
  };

  const toggleUnFav = () => {
    if (unfavActive) {
      setUnFavActive(false);
      setSpecificDogs("all");
    } else {
      setUnFavActive(true);
      setFavActive(false);
      setCreateActive(false);
      setSpecificDogs("unfav");
    }
  };

  const toggleCreate = () => {
    if (createActive) {
      setCreateActive(false);
      setSpecificDogs("all");
    } else {
      setCreateActive(true);
      setFavActive(false);
      setUnFavActive(false);
    }
  };

  return (
    <section>
      <div className="container-header">
        <div className="container-label">{label}</div>
        <div className="selectors">
          {/* Add the class 'active' to any selector in order to make it's color change */}
          {/* This should display the favorited count */}
          <div
            className={`selector ${favActive ? "active" : ""}`}
            onClick={toggleFav}
          >
            favorited ( {favoriteCount} )
          </div>

          {/* This should display the unfavorited count */}
          <div
            className={`selector ${unfavActive ? "active" : ""}`}
            onClick={toggleUnFav}
          >
            unfavorited ({unfavoriteCount})
          </div>
          <div
            className={`selector ${createActive ? "active" : ""}`}
            onClick={toggleCreate}
          >
            create dog
          </div>
        </div>
      </div>
      {createActive ? (
        <CreateDogForm />
      ) : (
        <DogCard
          dogs={cardDogs.length ? cardDogs : allDogsList}
          setDogId={setCurrDogId}
          setDogFavStatus={setCurrDogStatus}
        />
      )}
    </section>
  );
};
