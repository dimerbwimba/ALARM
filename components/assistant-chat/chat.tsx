"use client";
import { useState } from "react"

const ChatAssistant = () => {
    const [showChat, setShowChat] = useState(false)
    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState("")
    return (
        <div className="chat-container">
            <div className="chat-inner">
                {showChat && <div className="chat-box">
                    <div className="close-chat">
                        <div onClick={() => setShowChat(false)} className="close-chat-button">
                            close
                        </div>
                    </div>
                    <div className="chat">
                        <div className="messages">
                            <div className="chat-form">
                                <div className="chat-form-container">
                                    <div className="chat-form-input">
                                        <textarea onChange={(e)=> setMessage(e.target.value)} rows={1} className="input" placeholder="hello world" ></textarea>
                                    </div>
                                    <div onClick={()=> { setMessages([{message,to:"s",time:"1:00"},...messages]) }} className="send-button">envoyer</div>
                                </div>
                            </div>
                            <div className="message-container">
                                <div className="messages-list">
                                    {messages.map((ms:any, index:number) => (
                                        <div key={index} className={`msg-${ms.to}`}>
                                            <span className="txt">
                                                {ms.message} | {ms.time}
                                               
                                            </span>
                                            
                                        </div>
                                    ))}
                                </div>
                                <div />
                            </div>
                        </div>
                    </div>
                </div>}
                <div onClick={() => setShowChat(true)} className="chat-button">
                    <div className="assistant">
                        <i className="flaticon-bubble-chat"></i> <span className="text">Avez-vous une question ?</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ChatAssistant