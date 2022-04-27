import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
    state = { images: [] }

    // async means u must use await in the function
    onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers: {
                Authorization: 'Client-ID 8w_f_pTRzbaCO2aHL3L4YJd-cKtfJdNVGxnk88ZaWkg'
            }
        });
        // }).then((response) => {
        //     console.log(response.data.results);
        // });

        this.setState({
            images: response.data.results
        })
        // console.log(response.data.results);
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar runOnSubmit={this.onSearchSubmit}/>
                Found: {this.state.images.length}
                {/*<ImageList images={this.state.images} />*/}
            </div>
        );
    }
}

export default App;
