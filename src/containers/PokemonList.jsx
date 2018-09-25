import React, { Component } from "react";
import { bindActionCreators } from "redux";
import fetchPokemons from "../actions/fetchPokemons";
import { connect } from "react-redux";

class PokemonList extends Component {
  componentDidMount() {
    this.props.actions.fetchPokemons();
  }

  renderPokemons() {
    this.props.pokemons.map((pokemon) => (
      <li key={pokemon.id}> {pokemon.name} </li>
    ));
  }

  render() {
    const { pokemons } = this.props;
    if (pokemons && pokemons.length > 0) {
      return <ul> {this.renderPokemons()} </ul>;
    } else {
      return <p>No pokemons yet</p>;
    }
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ fetchPokemons }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonList);
