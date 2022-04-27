import React, {useState} from 'react'

import './Tooltip.css'

/* I kept the Tooltip simple only excepting props for content 
   going into the panel, placement of the panel and delay 
   to show panel. Those are the main functions needed. */

const Tooltip = (props) => {

    // Declare tip
    let tip

    // Active State to show/hide tip
    const [active, setActive] = useState(false)

    // Set delay for tip panel to appear
    // Default 500ms, felt like a solid delay amount 
    const showTip = () => {
        tip = setTimeout(()=> {
            setActive(true)
        }, props.delay || 500)
    }

    // Hide panel
    const hideTip = () => {
        clearTimeout(tip)
        setActive(false)
    }

    return(
        /* In the outer div you'll find onMounseEnter to show tip
           and onMouseLeave to hide tip */
        <div className="Tooltip-Wrapper" onMouseEnter={showTip} onMouseLeave={hideTip}>
            <div>
                {/* wrapping */}
                {props.children}
                {active && (
                    
                    /* This div will have the styling for the panel */
                    <div className={`Tooltip-Tip ${props.place || "top"}`}>

                        {/* Content will be placed here */}
                        {props.content}
                    </div>
                )}

            </div>
        </div>
    )
}



export default Tooltip 