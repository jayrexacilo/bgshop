import React from "react";
import PropTypes from "prop-types";
import GameCard from "./GameCard";

const GamesList = ({ games }) => (
  <div className="ui four cards">
    {games.length === 0 ? (
      <div className="ui icon message">
        <i className="icon info" />
        <div className="content">
          <div className="header">There are no game in your store!</div>
          <p>You should add some, don't you think?</p>
        </div>
      </div>
    ) : (
      games.map(game => <GameCard game={game} key={game._id} />)
    )}
  </div>
);

GamesList.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object).isRequired
};

GamesList.defaultProps = {
  games: []
};

export default GamesList;
