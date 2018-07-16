import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyAjYICaM48RA5slVzbGVrkOMS_-WRyG46c';
// Create the Component
const App = () => {
    return <div>
        <SearchBar />
    </div>;
}

//Pass the componenet to DOM
ReactDOM.render(<App />, document.querySelector('.container'));