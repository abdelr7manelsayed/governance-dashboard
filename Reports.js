import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../api";

function Reports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/reports`)
      .then((res) => res.json())
      .then((data) => setReports(data));
  }, []);

  return (
    <div>
      <h2>Reports</h2>
      <ul>
        {reports.map((report) => (
          <li key={report._id}>{report.title} - {report.date}</li>
        ))}
      </ul>
    </div>
  );
}

export default Reports;
