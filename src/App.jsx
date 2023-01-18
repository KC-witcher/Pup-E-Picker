// import { useState } from "react";
import "./App.css";
import { Section } from "./Components/Section";
import { getDogs } from "./service/api";
import { useEffect } from "react";
import "./fonts/RubikBubbles-Regular.ttf";
import { useState } from "react";

function App() {
  const [allDogsList, setAllDogsList] = useState([]);
  const [specificDogs, setSpecificDogs] = useState("all");

  const fetchDogs = async () => {
    const response = await fetch(getDogs);
    response.json().then((data) => setAllDogsList(data));
  };

  const patchDogs = async (id, fav) => {
    const fetchDogs = await fetch(`${getDogs}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isFavorite: fav }),
    });

    fetchDogs
      .json()
      .then((data) =>
        setAllDogsList((PrevState) =>
          PrevState.map((obj) => (obj.id === data.id ? data : obj))
        )
      );
  };

  const createDogs = async (name, selectedImage, description) => {
    await fetch(getDogs, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        image: selectedImage,
        description: description,
      }),
    })
      .then((response) => response.json())
      .then((dog) => setAllDogsList((PrevState) => [...PrevState, dog]));
  };

  const deleteDogs = async (id) => {
    await fetch(`${getDogs}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(
      setAllDogsList((PrevState) => PrevState.filter((obj) => obj.id != id))
    );
  };

  useEffect(() => {
    fetchDogs();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>pup-e-picker</h1>
      </header>
      <Section
        label={"Dogs: "}
        allDogsList={
          specificDogs === "fav"
            ? allDogsList.filter((dog) => dog.isFavorite)
            : specificDogs === "unfav"
            ? allDogsList.filter((dog) => !dog.isFavorite)
            : allDogsList
        }
        favoriteCount={allDogsList.filter((dog) => dog.isFavorite).length}
        unfavoriteCount={allDogsList.filter((dog) => !dog.isFavorite).length}
        setSpecificDogs={setSpecificDogs}
        patchDogs={patchDogs}
        deleteDogs={deleteDogs}
        createDogs={createDogs}
      />
    </div>
  );
}

export default App;
