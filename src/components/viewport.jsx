import Breather from './breather'
import '../styles/viewport.css'

const viewport = (props) => {
    const backgroundStyle = {
        backgroundImage: `url(${props.settings.background})`
    }
    return(
        <div id="viewport">
            <Breather settings={props.settings} />
            <img id="background" style={backgroundStyle} />
        </div>
    )
}

export default viewport
