import React from 'react';



// [export default (props) =>...] would work too, but 
// component would be "<Unknown></Unknown>" in React DevTools.

const Option = (props) => (
      <div>
          {props.optionText}
          <button
              onClick={(e) => {
                  props.handleDeleteOption(props.optionText);
              }}
          >
              Remove
          </button>
      </div>
  );

export default Option;
