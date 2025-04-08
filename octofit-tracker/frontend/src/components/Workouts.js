import React from 'react';

function Workouts() {
  return (
    <div>
      <h1 className="display-4">Workouts</h1>
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Workout A</h5>
          <p className="card-text">Description of Workout A.</p>
          <a href="#" className="btn btn-primary">Start Workout</a>
        </div>
      </div>
    </div>
  );
}

export default Workouts;
