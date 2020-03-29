import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./style.scss";
import { fetchData } from "../../Store/Action";
import Stats from "./Components/Stats";
import ImageDetail from "./Components/ImageDetail";
import Ability from "./Components/Ability";

class PageDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonDetail: {},
      didMount: false
    };
  }

  async componentDidMount() {
    const { fetchData, location } = this.props;

    await fetchData(`/pokemon${location.pathname}`);
    this.setState({
      pokemonDetail: this.props.data,
      didMount: true
    });

    console.log(this.state.pokemonDetail);
  }

  render() {
    const { pokemonDetail, didMount } = this.state;
    return (
      <>
        {didMount && (
          <div className="page-detail">
            <h1 className="capitalize">{pokemonDetail.name}</h1>
            <Stats
              base_exp={pokemonDetail.base_experience}
              height={pokemonDetail.height}
              weight={pokemonDetail.weight}
              stats={pokemonDetail.stats}
            />
            <ImageDetail
              defaultBack={pokemonDetail.sprites.back_default}
              femaleBack={pokemonDetail.sprites.back_female}
              defaultBackShiny={pokemonDetail.sprites.back_shiny}
              femaleSBackhiny={pokemonDetail.sprites.back_shiny_female}
              defaultFront={pokemonDetail.sprites.front_default}
              femaleFront={pokemonDetail.sprites.front_female}
              defaultFrontShiny={pokemonDetail.sprites.front_shiny}
              femaleFrontShiny={pokemonDetail.sprites.front_shiny_female}
            />
            <Ability abilities={pokemonDetail.abilities} />
          </div>
        )}
      </>
    );
  }
}

PageDetail.defaultPropTypes = {
  data: {}
};

PageDetail.propTypes = {
  data: PropTypes.object
};

function mapStateToProps({ data }) {
  return {
    data
  };
}

export default connect(mapStateToProps, { fetchData })(withRouter(PageDetail));
