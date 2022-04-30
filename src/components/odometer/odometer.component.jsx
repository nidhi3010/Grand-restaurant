import React from "react";

import Odometer from 'react-odometerjs';

//import 'odometer/themes/odometer-theme-default.css';
import './odometer.styles.scss';

class Odometers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            odometerValue1: 0,
            odometerValue2: 0,
            odometerValue3: 0,
            odometerValue4: 0,
            odometerValue5: 0,





        };
    }

    componentDidMount() {
        this.setState({ odometerValue1: 20 });
        this.setState({ odometerValue2: 12 });
        this.setState({ odometerValue3: 15500 });
        this.setState({ odometerValue4: 85 });
        this.setState({ odometerValue5: 15 })
    }

    render() {
        const { odometerValue1, odometerValue2, odometerValue3, odometerValue4, odometerValue5 } = this.state;

        //  const {odometerValue} = 20;
        return (
            <div>
                <Odometer
                    format="d"
                    duration={500}
                    value={odometerValue1}
                />

                <Odometer
                    format="d"
                    duration={500}
                    value={odometerValue2}
                />

                <Odometer
                    format="d"
                    duration={500}
                    value={odometerValue3}
                />

                <Odometer
                    format="d"
                    duration={500}
                    value={odometerValue4}
                />

                <Odometer
                    format="d"
                    duration={500}
                    value={odometerValue5}
                />

            </div>
        );
    }
}

export default Odometers;