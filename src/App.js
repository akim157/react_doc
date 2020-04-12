import React from 'react';
import Table from './Table';
import Form from './forms/Form';

import NameForm from "./forms/NameForm";
import EssayForm from "./forms/EssayForm";
import FlavorForm from "./forms/FlavorForm";
import Reservation from "./forms/Reservation";

import Calculator from './uplift/Calculator';

import WelcomeDialog from './dialog/WelcomeDialog';

import FilterableProductTable from './filter_price/FilterableProductTable';

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
                <Calculator />
                <WelcomeDialog />
                <FilterableProductTable />
            </div>
        );
    }
}


export default App;
