import React, {Component} from "react";
import { connect } from "react-redux";
import { Slider } from "../components";
import _ from "lodash";

const mapStateToProps = (state, props) => {
    return {
        song : state.song.details
    }
};

export class MusicContainerConnect extends Component {
    constructor() {
        super();
        this.state = {
            song: {
                id: 2,
                title: "Counting stars",
                image: "./images/onerepublic.jpg",
                src: "./music/OneRepublic-Counting-Stars.mp3",
                artist: "One Republic"
            },
            isPlaying: false,
            start: 0
        };
        this.changeVolume = this.changeVolume.bind(this);
        this.togglePlay = this.togglePlay.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
    }



    togglePlay() {
        const { isPlaying } = this.state;
        if (isPlaying) {
            this.currentSong.pause();
            this.stopTimer();
        } else {
            this.currentSong.play();
            this.startTimer();
        }
        this.setState({
            isPlaying: !this.state.isPlaying
        });
    }

    startTimer() {
        this.timer = setInterval(() => {
            this.setState({
                start: this.state.start + 1
            })
        }, 1000);
    }

    stopTimer() {
        clearInterval(this.timer);
    }

    changeVolume(max,min) {
        if (min >= max) {
            this.currentSong.volume = max / max;
        }
        if (min < max && min > 0) {
            this.currentSong.volume = min / max;
        } 
        if (min === 0) {
            this.currentSong.volume = 0;
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!_.isEqual(this.state.song, nextProps.song)) {
            this.stopTimer();
            this.currentSong.pause();
            this.setState({
                song: nextProps.song,
                isPlaying: true,
                start: 0
            }, () => {
                this.currentSong.load();
                this.currentSong.play();
                this.startTimer();
            });
        }
    }

    componentDidMount() {
        this.currentSong.volume = 0.5;
    }

    _formatTime(time) {
        if (time >= 0 && time < 10) {
            return `0:0${Math.floor(time)}` 
        }
        if (time >= 10 && time < 60) {
            return `0:${Math.floor(time)}` 
        } else if(time >= 60 && time < 1000){
            let newTime = (time / 60).toFixed(2);
            let minutes = Math.floor(newTime);
            let seconds = (newTime - minutes).toFixed(2);
            return  `${minutes}:${seconds.toString().split(".")[1]}`;
        }
    }


    render() {
        const { song, isPlaying, start} = this.state;
        const playOrPauseButton = isPlaying ? <i className="far fa-pause-circle" onClick={this.togglePlay}></i> : <i className="far fa-play-circle" onClick={this.togglePlay}></i>;
        return(
            <div className="music-container">
               <div className="music-info">
                    <i className="fas fa-signal"></i>
                    <img src={song.image} alt="image"/>
                    <div className="info">
                        <p className="title">{song.title}</p>
                        <p className="artist">{song.artist}</p>
                    </div>
               </div>
               <div className="control-buttons">
                    <i className="fas fa-step-backward"></i>
                    {playOrPauseButton}
                    <i className="fas fa-step-forward"></i>
               </div>
               <div className="music-slider">
                    <p className="current-time">{this.currentSong ? this._formatTime(start) : ""}</p>
                    <Slider width={500} height={5} showCircle start={start}/>
                    <p className="duration">{this.currentSong? this._formatTime(this.currentSong.duration) : ""}</p>
               </div>
               <div className="volume-random-control">
                    <i className="fas fa-random"></i>
                    <i className="fas fa-volume-up"></i>
                    <Slider width={60} height={5} showCircle callback={this.changeVolume}/>
               </div>
               <audio ref={el => this.currentSong = el}>
                <source src={song.src} type="audio/mpeg"/>
               </audio>

            </div>
        )
    }
}

export const MusicContainer = connect(
    mapStateToProps, null
)(MusicContainerConnect);