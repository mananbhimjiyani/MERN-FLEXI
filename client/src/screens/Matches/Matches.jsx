import React from 'react';

const Matches = () => (
    <div className="matches">
        <h2>Your Matches</h2>
        <div className="match-card">
            <img src="path/to/match-image.jpg" alt="Match" />
            <h3>Shreya, 23</h3>
            <p>3 km away</p>
            <button>View Profile</button>
        </div>
        {/* Other matches */}
    </div>
);

export default Matches;
