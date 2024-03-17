import './card.css'
import shoe from'../.././assets/shoe_image.png'
const Card = () => {
    return (
        <div className="hero_section">
            <div className="left">
                <p>YOUR FEET
                    DESERVE
                    THE BEST</p>

            </div>
            <div className="right">
                <img src={shoe} alt="shoe" />

            </div>

        </div>
    )
}

export default Card