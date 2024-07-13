import React, { useState } from 'react';

const Table = () => {

  const [rows, setRows] = useState([
    { id: 1, name: 'Item 1', dropdownValue: 'Option 1' },
    { id: 2, name: 'Item 2', dropdownValue: 'Option 2' },
    // Initial rows with dropdown values
  ]);

  // Function to handle adding a new row
  const handleAddRow = () => {
    const newRow = {
      id: rows.length + 1,
      name: `Item ${rows.length + 1}`,
      dropdownValue: 'Option 1', // Default value for dropdown
    };
    setRows([...rows, newRow]);
  };

  // Function to handle deleting a row
  const handleDeleteRow = (id) => {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
  };

  // Function to handle dropdown change
  const handleDropdownChange = (id, value) => {
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, dropdownValue: value } : row
    );
    setRows(updatedRows);
  };

  return (
    <div>
      <button onClick={handleAddRow}>Add Row</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Service Name</th>
            <th>Dropdown</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>
                <select
                  value={row.dropdownValue}
                  onChange={(e) => handleDropdownChange(row.id, e.target.value)}
                >
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                  {/* Add more options as needed */}
                </select>
              </td>
              <td>
                <button onClick={() => handleDeleteRow(row.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
