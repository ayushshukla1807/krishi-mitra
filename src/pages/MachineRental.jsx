import React from 'react';

const MachineRental = () => {
  const machines = [
    { name: 'Tractor', owner: 'Ramesh Patel', price: '₹1200/hour', location: 'Akola' },
    { name: 'Rotavator', owner: 'Suresh Kumar', price: '₹800/hour', location: 'Barshitakli' },
    { name: 'Harvester', owner: 'Meena Sharma', price: '₹2500/hour', location: 'Akola' }
  ];

  return (
    <div className="page">
      <div className="page-header">
        <h1>🚜 Machine Rental</h1>
        <p>Rent farming equipment from nearby farmers</p>
      </div>

      <div className="card">
        <h2>Available Machines</h2>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Machine</th>
                <th>Owner</th>
                <th>Price</th>
                <th>Location</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {machines.map((machine, index) => (
                <tr key={index}>
                  <td>{machine.name}</td>
                  <td>{machine.owner}</td>
                  <td>{machine.price}</td>
                  <td>{machine.location}</td>
                  <td>
                    <button className="btn btn-primary">Rent Now</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default MachineRental;
