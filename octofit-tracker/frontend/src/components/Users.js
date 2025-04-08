import React from 'react';

function Users() {
  return (
    <div>
      <h1 className="display-4">Users</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>JohnDoe</td>
            <td>john.doe@example.com</td>
          </tr>
          <tr>
            <td>JaneSmith</td>
            <td>jane.smith@example.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Users;
