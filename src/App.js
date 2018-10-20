import React, { Component } from 'react';
import AppRouter from './routers/AppRouter';

class App extends Component {
    render() {
        return (
            <div className="main-wrapper">
                <AppRouter />
            </div>
        );
    }
}

export default App;
