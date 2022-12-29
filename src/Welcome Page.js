import React from 'react';
import TextTransition, { presets } from "react-text-transition";
import images from './Media';
import aud from './Media/Temple.mp3';
// import { Howl } from 'howler';

class Welcome extends React.Component {

    constructor() {
        super();
        this.state = {
            index: 0,
            texts: [],
            mountImages: false,
            count: 1,
            fadeImages: []
        };
    }

    componentDidMount() {

        this.setState({
            texts: [
                "வணக்கம்",
                "ഹലോ",
                "నమస్కారం",
                "नमस्ते",
                "Welcome"
            ],
            fadeImages: {}
        });
        setInterval(() =>
            this.setState({
                index: this.state.index + 1
            }),
            3000
        );
        setTimeout(() => {
            this.setState({
                mountImages: true
            });
            setInterval(() => {
                this.setState({
                    count: this.state.count <= 5 ? this.state.count + 1 : 1,
                    fadeImages: images[this.state.count].url
                });

            }, 2500);
        },
            18000
        );
    }

    render() {
        // var sound = new Howl({
        //     src: ['./Media/Temple Romance.mp3'],
        //     autoplay: true,
        //     loop: true,
        //     volume: 1.5,
        // });
        return (
            <React.Fragment>
                {
                    aud.length
                        ?
                        <audio style={{ height: "-webkit-fill-available" }} controls={true} autoPlay={true} loop={true}>
                            <source src={aud} type="audio/mpeg"></source>
                        </audio>
                        : <></>
                }
                <div className='welcome'>
                    {
                        this.state.mountImages === false ?
                            <TextTransition springConfig={presets.slow}>
                                <h2>{this.state.texts[this.state.index % this.state.texts.length]}</h2>
                            </TextTransition>
                            :
                            <div className="slide-container">
                                {
                                    this.state.fadeImages.length ?
                                        <div>
                                            <img className='imageStyles' src={this.state.fadeImages} alt="load"></img>
                                        </div>
                                        :
                                        <div>
                                            <img className='imageStyles' src={images[0].url} alt="load"></img>
                                        </div>
                                }

                            </div>
                    }
                </div>
            </React.Fragment>
        );
    }
}

export default Welcome;