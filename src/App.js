import React from 'react';
import Table from './Table';
import Form from './Form';

import NameForm from "./NameForm";
import EssayForm from "./EssayForm";
import FlavorForm from "./FlavorForm";
import Reservation from "./Reservation";

class App extends React.Component {
    state = {
        characters: [],
    };

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    };

    removeCharacter = index => {
        const { characters } = this.state;
        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            }),
        });
    };

    render() {
        const { characters } = this.state;

        return (
            <div className="container">
                <Table
                    characterData={ characters }
                    removeCharacter={ this.removeCharacter }
                />
                <Form handleSubmit={this.handleSubmit} />
                <NameForm />
                <EssayForm />
                <FlavorForm />
                <Reservation />
            </div>
        );
    }
}


export default App;
