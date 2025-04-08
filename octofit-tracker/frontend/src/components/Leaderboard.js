import React from 'react';

function Leaderboard() {
  return (
    <div>
      <h1 className="display-4">Leaderboard</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Username</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>JohnDoe</td>
            <td>100</td>
          </tr>
          <tr>
            <td>JaneSmith</td>
            <td>95</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
