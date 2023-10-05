// src/Components/DataFetcher.js

import { useEffect, useState } from "react";

function Register() {
  const [data, setData] = useState(null);  // Use null as an initial state to signify 'not yet loaded'
  const [loading, setLoading] = useState(true);

  async function fetchData() {
  try {
    const response = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        field1: "1",
        field2: "1",
      }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json();
    setData(responseData);
    setLoading(false);
    console.log("Done loading!");
  } catch (error) {
    console.error("Error fetching data:", error);
    setLoading(false);
  }
}


  useEffect(() => {
    fetchData();  // Call the fetchData function when the component mounts
  }, []);

  if (loading) {
    return <div>Loading...</div>;  // Display loading indicator when data is being fetched
  }

  return (
    <div>
      <h1>Data from MongoDB</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Register;
