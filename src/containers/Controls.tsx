/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import cover from '../assets/images/cover/cradles.jpg';
import ControlButton from './components/ControlButton';
import { stop, play, prev, next, pause } from '../assets/images/buttons'

const Controls = () => {

    const [isPaused, setIsPaused] = useState(false);

    // is the isPaused is false, the setIsPaused will be true, and vice versa
    const handlePlay = () => {
        setIsPaused(!isPaused);
    }

    return (
        <div className="control-container">
            <img src={cover} alt="Cover music" className="current" />
            <div className="buttons-container">
                <ControlButton>
                    <img src={prev} alt="back" className="button-icon" />
                </ControlButton>

                <ControlButton>
                    <img src={stop} alt="stop" className="button-icon" />
                </ControlButton>

                <ControlButton>
                    <img 
                        src={isPaused ? pause : play} 
                        alt="play/pause" 
                        className="button-icon"
                        onClick={() => handlePlay()} 
                    />
                </ControlButton>

                <ControlButton>
                    <img src={next} alt="next" className="button-icon" />
                </ControlButton>
            </div>
        </div>
    )   
}

export default Controls;