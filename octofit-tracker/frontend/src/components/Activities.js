import React from 'react';

function Activities() {
  return (
    <div>
      <h1 className="display-4">Activities</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Activity</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Running</td>
            <td>30 minutes</td>
          </tr>
          <tr>
            <td>Swimming</td>
            <td>1 hour</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Activities;
