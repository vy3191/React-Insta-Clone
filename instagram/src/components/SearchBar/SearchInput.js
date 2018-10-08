import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SearchInput extends Component {
    render() {
        return (
            <div className="input">
              <input type='text' placeholder= 'Search' className='search-icon-center'/>
              <span className='search-icon search-icon-center'><img src='https://i.postimg.cc/Hx1q1NZC/if_icon-111-search_314807.png' alt='search-icon' /></span>
              <span className='cross-mark'><img src='https://i.postimg.cc/fTnXGQhb/if_x_alt_118584.png' alt='cross' /></span>
              {/* <FontAwesomeIcon icon={['fa', 'search']} /> */}
            </div>
        );
    }
}

export default SearchInput;