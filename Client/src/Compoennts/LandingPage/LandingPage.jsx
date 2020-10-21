import React from 'react';

function LandingPage () {
    return (
        <>
            <div>
                <h1>Where's the Spot?</h1>
                <p>Looking for a spot for your next headshot session? Struggling to find a scenic location to photograph a bridal party?
                    Start here by searching by location, event or best time of day to shoot.
                </p>
                <input type="text"/>
                <button>Seach</button>
            </div>
            <div>
                <h2>Quick Search</h2>
                <button>Toronto</button>
            </div>
        </>
    )
}

export default LandingPage;