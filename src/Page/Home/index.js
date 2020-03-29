import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchData } from "../../Store/Action";
import Card from "../../Card";
import Dropdown from "./Components/Dropdown";
import { options } from "./Components/Const";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      didMount: false,
      totalPage: 0,
      value: "1"
    };
  }

  async componentDidMount() {
    const { fetchData } = this.props;

    await fetchData(`/type/1/`).then(() => {
      this.setState({
        pokemon: this.props.data.pokemon,
        didMount: true
      });
    });
  }

  handleChange = value => {
    this.setState({
      value: value
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { fetchData } = this.props;
    const { value } = this.state;

    if (prevState.value !== value) {
      await fetchData(`/type/${value}`);
      this.setState({
        pokemon: this.props.data.pokemon,
        didMount: true
      });
    }
  }

  render() {
    const { pokemon, value } = this.state;

    return (
      <div>
        <h1 className="section-gutter mt-8">Pokemon List</h1>
        <div className="section-gutter">
          <Dropdown
            value={value}
            onChange={e => {
              this.handleChange(e.target.value);
            }}
            options={options}
          />
        </div>
        <div className="section-gutter">
          <div className="row">
            {pokemon.map((item, key) => {
              return (
                <div className="col-md-3" key={key}>
                  <Card data={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ data }) {
  return {
    data
  };
}

export default connect(mapStateToProps, { fetchData })(withRouter(HomePage));
