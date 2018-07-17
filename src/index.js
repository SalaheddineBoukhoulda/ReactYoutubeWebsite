import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';
import YSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyAjYICaM48RA5slVzbGVrkOMS_-WRyG46c';


// Create the Component
class App extends Component {
    constructor(props){
        super(props);
        this.state = { videos : []};
        //Youtube query fetch
        YSearch({key:API_KEY,term:'Cheb Khaled'},(videos) => {
            this.setState({videos});
        });
    }
    render(){
    return(
        <div>
        <SearchBar />
        <VideoDetails video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
        </div>
    )
    }
}

//Pass the componenet to DOM
ReactDOM.render(<App />, document.querySelector('.container'));