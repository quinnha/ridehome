import './Home.scss'

import { React, useState } from 'react'
import MySlider from '../MySlider/MySlider'

import { images, sounds } from '../../constants'
import { BsFillVolumeUpFill, BsFillVolumeMuteFill } from 'react-icons/bs'


const Home = () => {


    const getInitialState = () => {
        const value = 'sounds.talking';
        return value;
    }


    const [value, setValue] = useState(getInitialState)

    const getInitialSoundState = () => {
        const value = sounds.line1;
        return value;
    }


    const options = [
        {sound: "TTC line 1", value: sounds.line1},
        {sound: "TTC line 2", value: sounds.line2},
        {sound: "TTC line 3", value: sounds.line3},
        {sound: "TTC line 4", value: sounds.line4},
        {sound: "endless", value: sounds.endless}
    ]



    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <div className='Home'>
            <div className='header'>

                <div className='title'>


                <div className='title'>
                    <h1><a href = "https://github.com/lucasichen/ridehome" target="_blank" rel="noreferrer"> ride home </a></h1>
                </div>
                
                {/* <BsFillVolumeUpFill id='souwnd-icon'/> */}


                {/* Title */} 
                <div className='title'> 

                    <h1>Ride Home</h1>
                </div>
                <BsFillVolumeUpFill id='sound-icon'/>

            </div>
            <img id='home-img' src={images.train_night} alt='home-img' />
            <div className='volume-controllers'>

                <div>

                <div id = "dropdown-slider-div">

                <MySlider
                    title=""
                    sound={value}
                    id="subwaySound"
                />
                    <div id = "dropdown-div">
                        <select value = {value} onChange={handleChange} id = 'dropdown'>

                           {options.map((option) => (
                               <option value = {option.value}>{option.sound}</option>
                           ))}
                        </select>
                    </div>

                </div>
                <div>
                    <MySlider 
                        title="talking"
                        sound={sounds.talking}
                        id="talkingSound"
                    />
                </div>
                {/* <div>
                    <MySlider 

                        title="Announcer"
                        sound={sounds.announcer}
                        id="annoucerSound"
                    />
                </div> */}
                <div>
                    <MySlider 
                        title="music"
                        sound={sounds.music}
                        id="musicSound"
                    />
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}


export default Home