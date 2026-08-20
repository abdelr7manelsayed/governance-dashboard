import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../api";

function Alerts() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/alerts`)
      .then((res) => res.json())
      .then((data) => setAlerts(data));
  }, []);

  return (
    <div>
      <h2>Alerts</h2>
      <ul>
        {alerts.map((alert) => (
          <li key={alert._id}>{alert.message} - {alert.level}</li>
        ))}
      </ul>
    </div>
  );
}

export default Alerts;
