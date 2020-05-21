import React, {useContext} from "react";

import smurfList from "../contexts/smurflistcontext";
//useContextDetails
function SmurfVillage(){
    const smurfs = useContext(smurfList);

    return(
        <div>
            {smurfs.map(smurf => {
                return(
                    <div key={smurf.id}>
                        <h1>{smurf.name}</h1>
                        <h2>Age: {smurf.age}</h2>
                        <h2>Height: {smurf.height} ''</h2>
                        <hr/>
                    </div>
                )
            })}
        </div>
    )
}

export default SmurfVillage;