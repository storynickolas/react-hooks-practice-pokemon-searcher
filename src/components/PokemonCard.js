import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ item }) {
  const [sprite, setSprite] = useState(item.sprites.front)

  function changeSprite() {
    setSprite(sprite === item.sprites.front ? item.sprites.back : item.sprites.front)
  }

  return (
    <Card onClick={() => changeSprite()}>
      <div>
        <div className="image">
          <img alt="oh no!" src={sprite}/>
        </div>
        <div className="content">
          <div className="header">{item.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {item.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
