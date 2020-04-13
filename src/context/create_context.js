import React from 'react';

const ThemeContext = React.createContext('light');

class App extends React.Component {
    render() {
        return (
            <ThemeContext.Provider value='dark'>
                <Toolbar />
            </ThemeContext.Provider>
        );
    }
}

function Toolbar(props) {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

class ThemedButton  extends React.Component {
    static contextType = ThemeContext;
    render() {
        return <Button theme={this.context} />;
    }
}
