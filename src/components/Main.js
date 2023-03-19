import React from "react";
import "../styles/Main.css"

import Description from "./Description";
import YaMap from "./YandexMap";
import GetWeather from "./GetWeather";
import FiveDaysCheckbox from "./FiveDaysCheckbox";

class Main extends React.Component {
    state = {
        coords: [],
        isFiveDays: false,
    };
    updateData = (value) => {
        this.setState({coords: value});

    }

    updateIFiveDays = () => {
        if (this.state.isFiveDays) {
            this.setState({isFiveDays: false});
        }else {
            this.setState({isFiveDays: true});
        }
    }


    render() {

        return (
            <main>
                <h1>The weather in any city</h1>
                <Description/>
                {!this.state.coords.length ? <YaMap updateDate={this.updateData} /> : <div></div>}
                <FiveDaysCheckbox updateIFiveDays={this.updateIFiveDays} />
                <GetWeather coords={this.state.coords} updateDate={this.updateData} isFiveDays={this.state.isFiveDays}/>
            </main>
        );
    }
}

export default Main;



