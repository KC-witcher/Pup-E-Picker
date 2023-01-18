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
  patchDogs,
  deleteDogs,
  setSpecificDogs,
  createDogs,
}) => {
  const [favActive, setFavActive] = useState(false);
  const [unfavActive, setUnFavActive] = useState(false);
  const [createActive, setCreateActive] = useState(false);

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
        <CreateDogForm createDogs={createDogs} />
      ) : (
        <DogCard
          dogs={allDogsList}
          setDogId={setCurrDogId}
          setDogFavStatus={setCurrDogStatus}
          getPatchDogs={patchDogs}
          getDeleteDogs={deleteDogs}
        />
      )}
    </section>
  );
};
