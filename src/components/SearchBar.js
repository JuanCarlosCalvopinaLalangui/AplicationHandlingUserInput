import React from "react";

class SearchBar extends React.Component {
    onInputChange(event){ // callback function used in input tag typical named function on[in what object][Change/Click/Submit]
        console.log(event.target.value);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" onChange={this.onInputChange}/>
                        {/*<input type="text" onChange={(event => console.log(event.target.value))}/>*/}
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
