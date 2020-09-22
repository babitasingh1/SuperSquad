import React from 'react';
import { connect } from 'react-redux';
import { removeCharacterById } from '../actions';

function HeroList(props) {
  return (
    <div>
      <h4>Your hero squad</h4>
      <ul>
        {props.heroes.map((hero) => {
          return (
            <li key={hero.id} className='list-group-item'>
              <div className='list-item'>{hero.name}</div>
              <div
                className='list-item right-button'
                onClick={() => props.removeCharacterById(hero.id)}
              >
                X
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    heroes: state.heroes,
  };
}
export default connect(mapStateToProps, { removeCharacterById })(HeroList);
