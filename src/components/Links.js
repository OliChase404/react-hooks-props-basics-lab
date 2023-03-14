import React from "react";

const Links = (props) => {
    return (
        <div id="links">
            <h3>Links</h3>
            <a href={props.github}>{props.github}</a>
            <a href={props.linkedin}>{props.linkedin}</a>
            {/* <a href={props.links.linkedin}>{props.links.linkedin}</a> */}
        </div>
    )
}

export default Links;