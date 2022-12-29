import React from 'react';
import TextTransition, { presets } from "react-text-transition";
import images from './Media';
import invi from './Media/Invitation1.jpg';
import aud from './Media/Temple.mp3';
// import left from './left.png';
// import right from './right.png';
import ReactAudioPlayer from 'react-audio-player';

class Welcome extends React.Component {

    constructor() {
        super();
        this.state = {
            index: 0,
            texts: [],
            mountImages: false,
            count: 1,
            fadeImages: [],
            showInvitation: false
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

            }, 3000);
        },
            27000
        );
        setTimeout(() => {
            this.setState({
                showInvitation: true
            });
        }, 39000)
    }

    render() {
        // var sound = new Howl({
        //     src: ['./Media/Temple Romance.mp3'],
        //     autoplay: true,
        //     loop: true,
        //     volume: 1.5,
        // });
        return (
            <React.Fragment >
                <div className='welcome' >
                    {/* <div className='leftDecorations'>
                        <img style={{width:"7em"}} src={left} alt='not loaded'></img>
                    </div>
                    <div className='rightDecorations'>
                        <img style={{width:"7em"}} src={right} alt='loaded'></img>
                    </div> */}
                    {
                        this.state.mountImages === false && aud ?
                            <div>
                                <TextTransition springConfig={presets.molasses}>
                                    <h2>{this.state.texts[this.state.index % this.state.texts.length]}</h2>
                                </TextTransition>
                            </div>
                            :
                            this.state.showInvitation === false ?
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
                                :
                                <div className='container'>
                                    <img className='invitation' src={invi} alt="load"></img>
                                    <div className="text-block">
                                        <p className='welcome'>Welcome</p>
                                        <p className='hh'>Abbirami weds Hariprasad</p>
                                        <p className='details'>Time: 9 AM - 10:30 AM</p>
                                        <p className='details'>Venue: 13/17, GA Canal Rd, Graham Nagar, Shivaji Nagar, Thanjavur, Tamil Nadu 613001</p>
                                        <p className='details'><a href="https://www.google.co.in/maps/dir/11.6149784,79.5019539/13%2F17,+GA+Canal+Rd,+Graham+Nagar,+Shivaji+Nagar,+Thanjavur,+Tamil+Nadu+613001/@11.195519,78.9876681,10z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3baab97c91b5989d:0x262a7634757ffa7e!2m2!1d79.1445369!2d10.7779681?hl=en-GB">Google maps Link</a></p>
                                    </div>
                                </div>
                    }
                    <ReactAudioPlayer
                        src={aud}
                        autoPlay={true}
                        controls={false}
                        loop={false}
                    />
                </div>
            </React.Fragment >
        );
    }
}

export default Welcome;