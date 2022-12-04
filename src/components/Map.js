import React from 'react';
import IframeResizer from 'iframe-resizer-react';

function Map() {
    return (
        <>
            <h1>Map</h1>
            <IframeResizer
            src="http://app.kandaweather.net:3000/#close"
            style={{width: '1px', minWidth: '100%', height:'100vh'}}
            ></IframeResizer>
        </>
        
    )
}
export default Map;