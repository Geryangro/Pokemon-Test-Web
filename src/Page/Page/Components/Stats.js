import React from "react";
import "../style.scss";

const Stats = props => {
  const data = {
    base_exp: props.base_exp,
    height: props.height,
    weight: props.weight,
    stats: props.stats
  };

  return (
    <div className="stats d-flex section-gutter">
      <div className="stats-section orange-young">
        <h3>Base Pokemon :</h3>
        <h5>Base Experience : {data.base_exp}</h5>
        <h5>Height : {data.height}</h5>
        <h5>Weight : {data.weight}</h5>
      </div>
      <div className="stats-section orange">
        <h3>Base Stats :</h3>
        {data.stats.map((item, key) => {
          return (
            <div className="stats-skill d-flex" key={key}>
              <span className="capitalize">
                {item.stat.name} : {item.base_stat}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
