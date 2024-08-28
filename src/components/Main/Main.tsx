"use client"

import React, { useContext } from 'react'
import "./Main.css"
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { Context } from '@/context/Context'

const Main = () => {
    const context = useContext(Context);

    if (!context) {
        return <div>Error: Context not available</div>;
    }

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = context

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onSent(input);
        }
    };

    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <Image src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                {!showResult ?
                    <>
                        <div className="greet">
                            <p><span>Hello, Shubham.</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>How to reach Philadelphia from India via Airways in affordable price</p>
                                <Image src={assets.compass_icon} alt='' />
                            </div>
                            <div className="card">
                                <p>Give me some tips and trics for making a simple robot for my college project</p>
                                <Image src={assets.bulb_icon} alt='' />
                            </div>
                            <div className="card">
                                <p>Which chatting app is best, fast and secured nowadays?</p>
                                <Image src={assets.message_icon} alt='' />
                            </div>
                            <div className="card">
                                <p>Write the Merge Sort algorithm using recursive approach in C++</p>
                                <Image src={assets.code_icon} alt='' />
                            </div>
                        </div>
                    </>
                    : <div className='result'>
                        <div className="result-title">
                            <Image src={assets.user_icon} alt='' />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <Image src={assets.gemini_icon} alt='' />
                            {loading ? <div className='loader'>
                                <hr />
                                <hr />
                                <hr />
                            </div> : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>}

                        </div>
                    </div>}

                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' onKeyPress={handleKeyPress}/>
                        <div>
                            <Image src={assets.gallery_icon} alt='' />
                            <Image src={assets.mic_icon} alt='' />
                            {input?<Image onClick={() => onSent(input)} src={assets.send_icon} alt='' />:null}
                        </div>
                    </div>
                    <p className="bottom-info">
                        Our voice assistant could give little inaccurate data as it is in testing phase right now. Inconvenience is sorry
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main