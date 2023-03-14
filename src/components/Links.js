import React from "react";

const Links = ({user}) => {

    return (
        <div>
            <h3>Links</h3>
            {user && user.links &&
                <div>
                     <a href={user.links.github}>{user.links.github}</a>
                    <a href={user.links.linkedin}>{user.links.linkedin}</a>
                </div>
             }
        </div>
    )
}


export default Links