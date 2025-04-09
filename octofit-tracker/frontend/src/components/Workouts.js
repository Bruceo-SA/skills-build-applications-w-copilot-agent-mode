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
      <h1 className="display-4">Workouts</h1>
      <ul className="list-group">
        {workouts.map((workout, index) => (
          <li key={index} className="list-group-item">{workout.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Workouts;
