import React from 'react';
import { connect } from 'react-redux';
import { addCharacterById } from '../actions';

function CharacterList(props) {
  console.log(props);

  return (
    <div>
      <h4>Characters</h4>
      <ul className='list-group'>
        {props.characters.map((character) => {
          return (
            <li key={character.id} className='list-group-item'>
              <div className='list-item'>{character.name}</div>
              <div
                className='list-item right-button'
                onClick={() => props.addCharacterById(character.id)}
              >
                +
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
    characters: state.characters,
    heroes: state.heroes,
  };
}

export default connect(mapStateToProps, { addCharacterById })(CharacterList);
