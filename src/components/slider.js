import React, {Component} from "react";

export class Slider extends Component {
    constructor() {
        super();
        this.state = {
            width: 100,
            height: 10
        };
        this.onClick= this.onClick.bind(this);
    }
    componentWillMount(nextProps) {
        if (this.props.width) {
            this.setState({
                width: this.props.width,
                innerWidth: this.props.width / 2
            });
        }
        if (this.props.height) {
            this.setState({
                height: this.props.height
            });
        }
    }

    onClick(elem) {
        const { callback } = this.props;
        const clickLocation = elem.screenX;
        const innerSlider = this.innerslider;
        const currentInnerWidth = innerSlider.getBoundingClientRect().right;
        let diff;
        if (currentInnerWidth > clickLocation) {
            diff = currentInnerWidth - clickLocation;
            if ((innerSlider.clientWidth - diff) > 0) {
                innerSlider.style.width = (innerSlider.clientWidth - diff) + "px";
                if (callback) {
                    callback(this.slider.getBoundingClientRect().width,(innerSlider.clientWidth - diff));
                }
            } else {
                innerSlider.style.width = 0;
                if (callback) {
                    callback(this.slider.getBoundingClientRect().width,0);
                }
            }
        }
        if (clickLocation > currentInnerWidth){
            diff = clickLocation - currentInnerWidth;
            if ((innerSlider.clientWidth + diff) < this.slider.getBoundingClientRect().width) {
                innerSlider.style.width = (innerSlider.clientWidth + diff) + "px";
                if (callback) {
                    callback(this.slider.getBoundingClientRect().width,(innerSlider.clientWidth + diff));
                }
            } else {
                innerSlider.style.width = this.slider.getBoundingClientRect().width;
                if (callback) {
                    callback(this.slider.getBoundingClientRect().width,this.slider.getBoundingClientRect().width);
                }
            }
        }
        
        
    }

    render() {
        const { innerWidth, width,height } = this.state;
        const { showCircle, start} = this.props;
        return(
            <div className="slider" style={{width,height}} ref={el => {this.slider = el}} onClick={this.onClick.bind(this)}>
                <div className="inner-slider" style={{width: start >= 0 ? start : innerWidth}} ref={node => {this.innerslider = node}}>
                    {showCircle && <div className="slider-circle" style={{width: height + 10, height: height + 10}} >
                        <div className="slider-inner-circle" style={{width: height + 2, height: height + 2}}></div>
                    </div>}
                </div>
            </div>
        )
    }
}