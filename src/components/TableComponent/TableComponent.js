import React, { useState } from 'react';
import "./TableComponent.css"
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const TableComponent = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      selectedService: "",
      charges: []
    }
  ]);

  const Services = ["Aeroplane", "Taxi", "Huehuheuhue"];

  const Charges = {
    "Aeroplane": ["Parking", "Landing Fee", "Fuel Surcharge"],
    "Taxi": ["Drop Charge", "Waiting Charge"],
    "Huehuheuhue": ["Service 1 Charge", "Service 2 Charge"]
  };

  const addService = () => {
    const newServiceRow = {
      id: rows.length + 1,
      selectedService: "",
      charges: []
    };
    setRows([...rows, newServiceRow]);
  };

  const addCharge = (rowId, charge) => {
    const updatedRows = [...rows];
    const newChargeRow = {
      id: updatedRows[rowId - 1].charges.length + 1,
      charge: charge
    };
    updatedRows[rowId - 1].charges.push(newChargeRow);
    setRows(updatedRows);
  };

  const handleServiceChange = (rowId, service) => {
    const updatedRows = [...rows];
    updatedRows[rowId - 1].selectedService = service;
    setRows(updatedRows);
  };

  const deleteService = (rowId) => {
    const updatedRows = rows.filter(row => row.id !== rowId);
    setRows(updatedRows);
  };

  const deleteCharge = (rowId, chargeId) => {
    const updatedRows = [...rows];
    updatedRows[rowId - 1].charges = updatedRows[rowId - 1].charges.filter(charge => charge.id !== chargeId);
    setRows(updatedRows);
  };

  return (
    <div>
      <button onClick={addService}>Add Service</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Service Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              <tr className={`service-${row.selectedService}`}>
                <td>{rowIndex + 1}</td>
                <td>
                  <select
                    value={row.selectedService}
                    onChange={(e) => handleServiceChange(row.id, e.target.value)}
                  >
                    <option value="">Select Service</option>
                    {Services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <button onClick={() => addCharge(row.id, "")}><IoIosAddCircle/></button>
                  <button onClick={() => deleteService(row.id)}><MdDelete/></button>
                </td>
              </tr>
              {row.charges.map((chargeRow, chargeIndex) => (
                <tr key={`${row.id}-${chargeIndex}`}>
                  <td></td>
                  <td>
                    <select
                      value={chargeRow.charge}
                      onChange={(e) => {
                        const updatedRows = [...rows];
                        updatedRows[rowIndex].charges[chargeIndex].charge = e.target.value;
                        setRows(updatedRows);
                      }}
                    >
                      <option value="">Select Charge</option>
                      {Charges[row.selectedService] && Charges[row.selectedService].map((charge, index) => (
                        <option key={index} value={charge}>
                          {charge}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <button onClick={() => deleteCharge(row.id, chargeRow.id)}><MdDelete/></button>
                  </td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
