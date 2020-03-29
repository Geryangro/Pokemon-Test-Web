import React from "react";
import "../style.scss";

const Ability = props => {
  const data = {
    abilities: props.abilities
  };

  return (
    <div className="ability section-gutter">
      <h3>Abilities</h3>
      <div className="d-flex weapon">
        {data.abilities.map((item, key) => {
          return (
            <div
              className={`item ${item.is_hidden ? "red" : "young-blue"}`}
              key={key}
            >
              <h4 className="capitalize">{item.ability.name}</h4>
              {item.is_hidden ? (
                <div>
                  <h5>Secret Weapon</h5>
                  <p>
                    Ini Adalah Salah Satu Jurus Andalan Dari Pokemon Ini, Jurus
                    Andalan Mereka Tidak Mempunyai Nama Yang Sama, Tidak Semua
                    Pokemon Mempunyai Jurus Andalan.
                  </p>
                </div>
              ) : (
                <div>
                  <h5>Keahlian Bertarung</h5>
                  <p>
                    Jurus Yang Sering Di keluarkan Disaat bertarung, dengan
                    Pokemon Lainnya
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ability;
