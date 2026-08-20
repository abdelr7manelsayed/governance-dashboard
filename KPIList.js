import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../api";

function KPIList() {
  const [kpis, setKpis] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/kpis`)
      .then((res) => res.json())
      .then((data) => setKpis(data));
  }, []);

  return (
    <div>
      <h2>KPIs Dashboard</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
            <th>Target</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {kpis.map((kpi) => (
            <tr key={kpi._id}>
              <td>{kpi.name}</td>
              <td>{kpi.value}</td>
              <td>{kpi.target}</td>
              <td>{kpi.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default KPIList;
