// import { useState } from "react";
import "./App.css";
import { Section } from "./Components/Section";
import { getDogs } from "./service/api";
import { useEffect } from "react";
import "./fonts/RubikBubbles-Regular.ttf";
import { useState } from "react";
import { DogCard } from "./Components/DogCard";
import { CreateDogForm } from "./Components/CreateDogForm";

function App() {
  const [allDogsList, setAllDogsList] = useState([]);
  const [currDogId, setCurrDogId] = useState();
  const [currDogStatus, setCurrDogStatus] = useState();

  useEffect(() => {
    console.log(currDogId);
  }, [currDogId]);

  const fetchDogs = async () => {
    const response = await fetch(getDogs);
    response.json().then((data) => setAllDogsList(data));
  };

  const patchDogs = async (id, isFavorite) => {
    await fetch(`${getDogs}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isFavorite: isFavorite }),
    }).then(fetchDogs());
  };

  const deleteDogs = async (id) => {
    await fetch(`${getDogs}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(fetchDogs());
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
        allDogsList={allDogsList}
        favoriteCount={allDogsList.filter((dog) => dog.isFavorite).length}
        unfavoriteCount={allDogsList.filter((dog) => !dog.isFavorite).length}
        setCurrDogId={setCurrDogId}
        setCurrDogStatus={setCurrDogStatus}
      />
    </div>
  );
}

export default App;
