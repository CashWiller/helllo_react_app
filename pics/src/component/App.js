import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = {
    images: []
  };

  onSearchSubmit = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
      params: {
        query: term
      },
      headers: {
        Authorization: 'Client-ID 76d224391b87e02a12811c877bcca2fc045d70f2b49ff4e3e6a240c8b5110ede'
      }
    });

    this.setState({
      images: response.data.results
    });
  }

  render () {
    return (
      <div className="ui container" style={{ margin: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
