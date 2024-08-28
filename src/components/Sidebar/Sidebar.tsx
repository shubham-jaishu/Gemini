"use client";

import React, { useContext, useState } from 'react'
import "./Sidebar.css"
import {assets} from "../../assets/assets"
import Image from 'next/image'
import { Context } from '@/context/Context';

const Sidebar = () => {

    const [extended, setExtended] = useState(false)
    const context = useContext(Context);

    if (!context) {
        return <div>Error: Context not available</div>;
    }
    const {onSent, prevPrompts, setRecentPrompt, newChat} = context

    const loadPrompt = async (prompt: string) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

  return (
    <div className='sidebar'>
        <div className="top">
            <Image onClick={() => setExtended(!extended)} className='menu' src={assets.menu_icon} alt="" />
            <div onClick={() => newChat()} className="new-chat">
                <Image src={assets.plus_icon} alt=''/>
                {extended?<p>New Chat</p>:null}
            </div>
            {extended?
                <div className="recent">
                    <p className="recent-title">Recent</p>
                    {prevPrompts.map((item, index) => {
                        return (
                            <div onClick={() => loadPrompt(item)} key={index} className="recent-entry">
                                <Image src={assets.message_icon} alt=''/>
                                <p>{item.slice(0, 18)}...</p>
                            </div>
                        )
                    })}
                    
                </div>
                :null    
            }
            
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <Image src={assets.question_icon} alt=''/>
                {extended?<p>Help</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <Image src={assets.history_icon} alt=''/>
                {extended?<p>Activity</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <Image src={assets.setting_icon} alt=''/>
                {extended?<p>Settings</p>:null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar