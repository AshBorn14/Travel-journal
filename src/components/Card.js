import locationPin from "../images/pin.svg"
// import locationImage from "../images/Banff.jpg"


export default function Card(props){
    return (

        <div className="card">
            <img src= {props.imageUrl} className="card-image" alt="" />
            <div className="card-content">
                <img src={ locationPin } className="location-pin" alt="" />
                <span className="card-location">{ props.location }</span>
                <a href={props.googleMapsUrl} target="_blank" rel="noreferrer">View on Google Maps Link</a>
                <h1 className="card-title">{props.title}</h1>
                <p className="card-date">{props.startDate} - {props.endDate}</p>
                <p className="card-description">{props.description}</p>
            </div>
        </div>

        
    )
}

/* <div className="card">
            <img src={ locationImage } className="card-image" alt="" />
            <div className="card-content">
                <img src={ locationPin } className="location-pin" alt="" />
                <span className="card-location">Canada</span>
                <a href="https://www.google.com/maps/place/Vancouver+Aquarium/@49.3004911,-123.1330714,17z/data=!3m1!4b1!4m5!3m4!1s0x5486718d7aca6ca7:0x5f251627980ee358!8m2!3d49.3004876!4d-123.1308774" target="_blank" rel="noreferrer">View on Google Maps Link</a>
                <h1 className="card-title">Vermilion Lakes</h1>
                <p className="card-date">12 Jan, 2014 - 24 Jan, 2014</p>
                <p className="card-description">The Vancouver Aquarium is a public aquarium located in Stanley Park in Vancouver, British Columbia, Canada. Aquarium is a centre for marine research, ocean literacy education, climate activism, conservation and marine animal rehabilitation.</p>
            </div>
        </div> */