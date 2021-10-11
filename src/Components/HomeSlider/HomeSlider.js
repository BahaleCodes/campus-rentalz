import React from 'react';
import './HomeSlider.css';

const Slide = (props) => {
    let slideStyle = { backgroundImage: `url( ${props.background})` };
    return (
        <div
            className="slider__slide"
            data-active={props.active}
            style={slideStyle}
        >
            <div className="slider__slide__text">
                <h2>
                    {props.text}
                </h2>
            </div>
        </div>
    );
}

class HomeSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSlide: 0,
            interval: 3,
            autoplay: true,
            slides: [
                {
                    background: "/img/Slide/Building.jpeg",
                    text: "Are you a 1st year student looking for accomodation?"
                },
                {
                    background: "/img/Slide/Building2.jpeg",
                    text: "Not liking where your living and looking for a better place?"
                },
                {
                    background: "/img/Slide/Building3.jpeg",
                    text: "Is your current accomodation not so accomodating for you?"
                }
            ]
        };
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            console.log(this.state.autoplay);
            if (this.state.autoplay) {
                this.nextSlide();
            }
        }, this.state.interval * 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    pause() {
        this.setState({ autoplay: false });
    }

    resume() {
        this.setState({ autoplay: true });
    }

    prevSlide() {
        let slide = this.state.activeSlide - 1 < 0
            ? this.state.slides.length - 1
            : this.state.activeSlide - 1;
        this.setState({
            activeSlide: slide
        });
    }

    nextSlide() {
        let slide = this.state.activeSlide + 1 < this.state.slides.length
            ? this.state.activeSlide + 1
            : 0;
        this.setState({
            activeSlide: slide
        });
    }

    render() {
        return (
            <div id='homeSlider' onMouseEnter={this.pause.bind(this)} onMouseLeave={this.resume.bind(this)}>
                {this.state.slides.map((slide, index) => {
                    return (
                        <Slide
                            background={slide.background}
                            text={slide.text}
                            active={index === this.state.activeSlide}
                        />
                    );
                })}
                <div className="rightArrow" onClick={this.nextSlide.bind(this)}><i className="fa fa-angle-double-right"></i></div>
                <div className="leftArrow" onClick={this.prevSlide.bind(this)}> <i className="fa fa-angle-double-left"></i></div>
            </div>
        );
    }
}

export default HomeSlider;