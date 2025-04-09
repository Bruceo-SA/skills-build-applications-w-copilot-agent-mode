import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch('https://orange-space-sniffle-9j5r6j97x6j3rw6-8000.app.github.dev/api/teams');
        const data = await response.json();
        setTeams(data);
      } catch (error) {
        console.error('Error fetching teams:', error);
      }
    };

    fetchTeams();
  }, []);

  return (
    <div>
      <h1 className="display-4 text-center">Teams</h1>
      <ul className="list-group">
        {teams.map((team, index) => (
          <li key={index} className="list-group-item">{team.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Teams;
