import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ pokemon, handleNew }) {
  const [length, setLength] = useState(151)
  const [name, setName] = useState()
  const [hp, setHp] = useState()
  const [front, setFront] = useState()
  const [back, setBack] = useState()

  function handleSubmit(e) {
    console.log(length)
    e.preventDefault()
    const itemData = {
      "id": length,
      "name": name,
      "hp": hp,
      "sprites": {
        "front": front,
        "back": back
      }
    };
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData),
    })
      .then((r) => r.json())
      .then((newItem) => handleNew(newItem));
      setLength(length+1)
  }
  function handleName(e) {
    setName(e.target.value)
  }
  function handleHp(e) {
    setHp(e.target.value)
  }
  function handleFront(e) {
    setFront(e.target.value)
  }
  function handleBack(e) {
    setBack(e.target.value)
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={handleName}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={handleHp}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleFront}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleBack}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
