import { useState } from "react";

export default function Popout(props) {
    const [expanded, setExpanded] = useState(props.value);

    if(expanded) {
        return (
            <div>
                This state is true
            </div>
        )
    }
    return (
        <div> 
            This state is false
        </div>
    )

}