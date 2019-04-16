import React from 'react';
import {connect} from "react-redux";

export const Navigation = ({session}) => {
  return (
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <a className="navbar-brand"
           href="#">Logo</a>
        <button className="navbar-toggler"
                type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>

        </button>
        <div className="collapse navbar-collapse"
             id="navbarSupportedContent">
          <input className="form-control mr-sm-2"
                 type="search"
                 placeholder="Search"
                 aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0"
                  type="submit">Search</button>
        </div>

      </nav>
  )
};

function mapStateToProps(state){
    console.log(state.reducer.session);
    return {
        session:state.reducer.session
    }
}

export const ConnectedNavigation = connect(mapStateToProps)(Navigation);