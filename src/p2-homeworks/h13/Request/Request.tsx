import {ReactElement} from "react";


type RequestType = {
    data: string
}

export const Request = (props: RequestType): ReactElement => {
    return <div>{props}</div>
}