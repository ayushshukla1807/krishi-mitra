import React from 'react';

const Community = () => {
  const posts = [
    { title: 'Best time to plant wheat?', author: 'Rahul Kumar', replies: 15 },
    { title: 'Dealing with sugarcane pests', author: 'Priya Singh', replies: 8 },
    { title: 'Organic farming techniques', author: 'Anil Patel', replies: 12 }
  ];

  return (
    <div className="page">
      <div className="page-header">
        <h1>👥 Community Forum</h1>
        <p>Connect with fellow farmers and share knowledge</p>
      </div>

      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h2>Recent Discussions</h2>
          <button className="btn btn-primary">New Topic</button>
        </div>

        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Topic</th>
                <th>Author</th>
                <th>Replies</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => (
                <tr key={index}>
                  <td>{post.title}</td>
                  <td>{post.author}</td>
                  <td>{post.replies}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Community;
