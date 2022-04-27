import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";

class App extends React.Component {
    state = { images: [] }

    // async means u must use await in the function
    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {query: term},
        });

        this.setState({
            images: response.data.results
        })
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar runOnSubmit={this.onSearchSubmit}/>
                Found: {this.state.images.length}
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;
