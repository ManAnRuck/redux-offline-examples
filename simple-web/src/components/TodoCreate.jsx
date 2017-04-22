import React from 'react';


export default (props) => {
  return (
    <div className="row">
      <form className="col s12">
        <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" className="validate" />
          <label htmlFor="email">Create a new todo</label>
        </div>
      </div>
      </form>
    </div>
  )
}
