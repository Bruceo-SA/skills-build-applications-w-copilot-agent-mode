import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch('https://orange-space-sniffle-9j5r6j97x6j3rw6-8000.app.github.dev/api/workouts');
        const data = await response.json();
        setWorkouts(data);
      } catch (error) {
        console.error('Error fetching workouts:', error);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div>
      <h1 className="display-4 text-center">Workouts</h1>
      <div className="row">
        {workouts.map((workout, index) => (
          <div key={index} className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{workout.name}</h5>
                <p className="card-text">{workout.description}</p>
                <button className="btn btn-primary">Start Workout</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Workouts;
