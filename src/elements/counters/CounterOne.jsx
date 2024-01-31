import React, { Component, Fragment } from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

class CounterOne extends Component {
    state = {
        didViewCountUp: false
    };

    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({didViewCountUp: true});
        }
    }

    render() {
        let Data = [
            {
                countNum : 100,
                countTitle: 'Her gösterimizde 100’den fazla seyirci, sanatın büyüsünü bizimle birlikte yaşadı.',
            },
            {
                countNum : 3,
                countTitle: 'Başarılı gösterilerimiz, her biri sanatseverler tarafından büyük ilgi gördü.',
            },

            {
                countNum : 10,
                countTitle: 'Genç yetenekler ve deneyimli sanatçılarla 10’dan fazla özel çalıştay düzenledik.',
            },
        ];

        return (
            <Fragment>
                <div className="row">
                    {Data.map((value, index) => (
                        <div className="counterup_style--1 col-lg-4 col-md-4 col-sm-6 col-12" key={index}>
                            <h5 className="counter">
                                <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall>
                                    <CountUp 
                                        end={this.state.didViewCountUp ? value.countNum : 0} 
                                        duration={5} // Adjust this value as needed
                                    />
                                </VisibilitySensor>
                            </h5>
                            <p className="description">{value.countTitle}</p>
                        </div>
                    ))}
                </div>
            </Fragment>
        );
    }
}

export default CounterOne;
