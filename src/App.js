import React, { Component } from 'react';
import axios from 'axios';
import AppRouter from './routers/AppRouter';

class App extends Component {
    state = {
        launches: []
    }

    componentDidMount() {
        axios.get(`https://launchlibrary.net/1.4/launch/next/5`)
            .then(res => {
                const launches = res.data.launches;
                this.setState({ launches });
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            //   <div className="App">
            //     <header className="App-header">
            //       <ul>
            //         { this.state.launches.map(launch => <li>{launch.name}</li>)}
            //       </ul>
            //     </header>
            //   </div>
            <AppRouter />
        );
    }
}

export default App;
