

import TextAnimateHuruf from "../utils/TextAnimateHuruf";
import TextAnimateKata from "../utils/TextAnimateKata";
import ProjectPotrait from "../utils/ProjectPotrait";


function NotFound() {
    return (
        <div>
            <svg viewBox="0 0 243 243">
                <filter >

                </filter>
            </svg>
            <div className="h-screen"></div>
            <TextAnimateHuruf />
            <div className="h-screen"></div>
            <p>test</p>
            <TextAnimateKata >WDAAWD</TextAnimateKata>
            <div className="h-screen"></div>
            <ProjectPotrait />
        </div>
    )


}

export default NotFound;
