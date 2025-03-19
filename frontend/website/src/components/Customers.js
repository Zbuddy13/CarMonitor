import React from 'react';
// history of charging elements
function Customers() {
  const customers = [
    { name: 'Jerry Mattedi', orderDate: '19 May, 2021 : 10:10 AM', phone: '251-661-5362', apt: '1A', registered: 'Yes' },
    { name: 'Elianora Vasilov', orderDate: '18 May, 2021 : 3:12 PM', phone: '171-534-1262', apt: '7H', registered: 'Yes' },
    { name: 'Alvis Daen', orderDate: '17 May, 2021 : 2:15 PM', phone: '974-661-5110', apt: '3B', registered: 'Yes' },
    { name: 'Lissa Shipsey', orderDate: '23 Apr, 2021 : 1:15 PM', phone: '546-664-2342', apt: '4D', registered: 'Yes' },
  ];

  return (
    <div className="customers">
      <h3>Recent Customers</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Order Date</th>
            <th>Phone Number</th>
            <th>Apartment</th>
            <th>Registered</th>
            <th>Options</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td>{customer.name}</td>
              <td>{customer.orderDate}</td>
              <td>{customer.phone}</td>
              <td>{customer.apt}</td>
              <td>{customer.registered}</td>
              <td>Options</td>
              <td>Details</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>...</span>
        <span>20</span>
      </div>
    </div>
  );
}

export default Customers;