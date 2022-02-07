type RequestType = {
    data: string
}

export const Request = (props: RequestType) => {
    return <div>{props.data}</div>
}