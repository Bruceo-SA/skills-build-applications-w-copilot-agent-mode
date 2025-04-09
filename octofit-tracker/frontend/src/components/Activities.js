import React, { useEffect, useState } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch('https://orange-space-sniffle-9j5r6j97x6j3rw6-8000.app.github.dev/api/activities');
        const data = await response.json();
        setActivities(data);
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    };

    fetchActivities();
  }, []);

  return (
    <div>
      <h1 className="display-4 text-center">Activities</h1>
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>Activity</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, index) => (
            <tr key={index}>
              <td>{activity.name}</td>
              <td>{activity.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Activities;