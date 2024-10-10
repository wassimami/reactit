import React, {Component} from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import Scroll from '../component/Scroll';
import './App.css';




class App extends Component  {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield:''
        }
     console.log('1');
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users=> { this.setState({robots: users})})
        
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }
    

    render(){
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return !robots.length?
             <h1>loading</h1> :
        (
                    <div className='tc'>
                        <h1 className='f2  '>roboFriends</h1>
                        <SearchBox searchChange={this.onSearchChange}/>
                        <Scroll>
                            <CardList robots={filteredRobots}/>
                        </Scroll>
                    </div>
                );
            }
    
        }
export default App;