import './Resource.css'

const Resource = (props) => {
    return(
        <div className = "Resource">
            <p><img className = "Event-Image" src = {props.imageName} width = "200" height = "250" /></p>
            <p className = "Event-Name">{props.eventName}</p>
            <p className = "Event-Type">{props.eventType}</p>
            <p className = "Info-Link-Box"><a href = {props.infoLink}><button className = "Info-Link">View Info</button></a></p>
        </div>
    )
}

export default Resource;