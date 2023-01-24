import { useState } from "react";
import { dogPictures } from "../assets/dog-pictures";

export const CreateDogForm = ({ createDogs }) => {
  const [dogName, setDogName] = useState("");
  const [dogDescription, setDogDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState(dogPictures.BlueHeeler);

  return (
    <form
      action=""
      id="create-dog-form"
      onSubmit={(e) => {
        e.preventDefault();
        createDogs(dogName, selectedImage, dogDescription);
        setDogName("");
        setDogDescription("");
        setSelectedImage(dogPictures.BlueHeeler);
      }}
    >
      <h4>Create a New Dog</h4>
      <label htmlFor="name">Dog Name</label>
      <input
        type="text"
        value={dogName}
        onChange={(e) => {
          setDogName(e.target.value);
        }}
      />
      <label htmlFor="description">Dog Description</label>
      <textarea
        name=""
        id=""
        cols="80"
        rows="10"
        value={dogDescription}
        onChange={(e) => {
          setDogDescription(e.target.value);
        }}
      ></textarea>
      <label htmlFor="picture">Select an Image</label>
      <select
        id=""
        value={selectedImage}
        onChange={(e) => {
          setSelectedImage(e.target.value);
        }}
      >
        {Object.entries(dogPictures).map(([label, pictureValue]) => {
          return (
            <option value={pictureValue} key={pictureValue}>
              {label}
            </option>
          );
        })}
      </select>
      <input type="submit" value="submit" />
    </form>
  );
};
