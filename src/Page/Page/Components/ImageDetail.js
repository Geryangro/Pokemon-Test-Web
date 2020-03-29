import React from "react";
import PropTypes from "prop-types";
import "../style.scss";

const ImageDetail = props => {
  const data = {
    defaultBack: props.defaultBack,
    femaleBack: props.femaleBack,
    defaultBackShiny: props.defaultBackShiny,
    femaleSBackhiny: props.femaleSBackhiny,
    defaultFront: props.defaultFront,
    femaleFront: props.femaleFront,
    defaultFrontShiny: props.defaultFrontShiny,
    femaleFrontShiny: props.femaleFrontShiny
  };

  return (
    <div className="section-gutter">
      <h3>Image Pokemon</h3>
      <div className="row">
        {data.defaultFront && (
          <div className="col-md-2">
            <div className="image-sprites">
              <img className="img" src={data.defaultFront} alt="default" />
            </div>
          </div>
        )}
        {data.femaleFront && (
          <div className="col-md-2">
            <div className="image-sprites">
              <img className="img" src={data.femaleFront} alt="female" />
            </div>
          </div>
        )}
        {data.defaultBack && (
          <div className="col-md-2">
            <div className="image-sprites">
              <img className="img" src={data.defaultBack} alt="default" />
            </div>
          </div>
        )}
        {data.femaleBack && (
          <div className="col-md-2">
            <div className="image-sprites">
              <img className="img" src={data.femaleBack} alt="female" />
            </div>
          </div>
        )}
        {data.defaultFrontShiny && (
          <div className="col-md-2">
            <div className="image-sprites">
              <img className="img" src={data.defaultFrontShiny} alt="default" />
            </div>
          </div>
        )}
        {data.femaleFrontShiny && (
          <div className="col-md-2">
            <div className="image-sprites">
              <img className="img" src={data.femaleFrontShiny} alt="female" />
            </div>
          </div>
        )}
        {data.defaultBackShiny && (
          <div className="col-md-2">
            <div className="image-sprites">
              <img className="img" src={data.defaultBackShiny} alt="default" />
            </div>
          </div>
        )}
        {data.femaleSBackhiny && (
          <div className="col-md-2">
            <div className="image-sprites">
              <img className="img" src={data.femaleSBackhiny} alt="female" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

ImageDetail.defaultPropTypes = {
  default: "",
  female: ""
};
ImageDetail.propTypes = {
  default: PropTypes.string,
  female: PropTypes.string
};

export default ImageDetail;
