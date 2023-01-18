import { FavoriteButton } from "./FavoriteButton";
import { TrashButton } from "./TrashButton";
import { UnfavoriteButton } from "./UnfavoriteButton";

export const DogCard = ({ dogs, getPatchDogs, getDeleteDogs }) => {
  const handleFavButtonClick = (currId, currStatus) => {
    getPatchDogs(currId, currStatus);
  };

  const handleDeleteButton = (currId) => {
    getDeleteDogs(currId);
  };
  return (
    <>
      {dogs.map((dog) => (
        <div className="dog-card" key={dog.id}>
          {/* Choose which button to show depending on if dog is a favorite */}
          {dog.isFavorite ? (
            <UnfavoriteButton
              onClick={() => handleFavButtonClick(dog.id, !dog.isFavorite)}
            />
          ) : (
            <FavoriteButton
              onClick={() => handleFavButtonClick(dog.id, !dog.isFavorite)}
            />
          )}

          {/* Use this button to delete a puppy :( */}
          <TrashButton
            onClick={() => {
              handleDeleteButton(dog.id);
            }}
          />

          {/* Ignore this  */}
          {/* You can temporarily set a favorite overlay after a user favoritest a dog */}
          {/* Try making className "favorite-overlay active"*/}
          <div className="favorite-overlay ">{"<3"}</div>

          {/* Ignore this  */}
          {/* You can temporarily set a unfavorite overlay after a user favoritest a dog */}
          {/* Try making className "unfavorite-overlay active"*/}
          <div className="unfavorite-overlay">{"</3"}</div>

          {/* A Dogs Name */}
          <p className="dog-name">{dog.name}</p>

          {/* A Dogs Image */}
          <img src={dog.image} alt={dog.name} />

          {/*  A Dogs description*/}
          <p className="dog-description">{dog.description}</p>
        </div>
      ))}
    </>
  );
};
