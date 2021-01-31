import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Results from "./Results";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });

    setPets(animals || []);

    console.log(animals);
  }
  // UseEffect is disconnected from when the Render is happening.
  // This schedules the following to run after the render happens
  // It's not synchronous
  // Why are we doing this?
  // We want the user to see something immediately.
  // and not wait for some AJAX call to bring back data
  useEffect(() => {
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      const breedsStrings = apiBreeds.map(({ name }) => name);
      //const breedStrings = apiBreeds.map((breedObj) => breedObj.name);
      setBreeds(breedsStrings);
    }, console.error);
    // }, error => console.error(error));
  }, [animal, setBreed, setBreeds]);

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
      
      <Results pets={pets}></Results>
    </div>
  );
};

export default SearchParams;
