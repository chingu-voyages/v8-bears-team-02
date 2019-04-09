import React from 'react';

import AskQuestion from './AskQuestion';

class SearchBar extends React.Component {

    render() {
        return (
         <div>
             <input className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search" />
                 <button className="btn btn-outline-success my-2 my-sm-0"
                         type="submit">Search</button>
             <AskQuestion />
         </div>

        )
    }
}

export default SearchBar;