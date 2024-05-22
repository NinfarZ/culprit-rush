import { getCurrentDirection } from "./lib/handleMoveMap";
import { Map } from "./map";

const MapWrapper = async() => {
    const directionsArray = await getCurrentDirection("kitchen")
    
    return(
        <Map directions={directionsArray} />
    )
}

export { Map }