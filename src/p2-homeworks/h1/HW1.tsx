import React from 'react'
import {Message} from "./Message";

const messageData = {
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6z5Asj733AuRYdGiVV7sBn_WqNEDLw6E3Tg&usqp=CAU',
    name: 'Child of Korn',
    message: 'Hello my friend',
    time: "22.01",
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1

