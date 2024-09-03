import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Define the component as a named function
function FetchDataComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MjUzNzQ3Nzh9.xO6hANfpUG1b8R-cAwPVj47YVwWIdiqeeRATqPULKEU"
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5005/voucher/vouchers',{
            headers: {
                'x-token': token
              }
        });
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Data fetched from proxy:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

// Export the component as default
export default FetchDataComponent;

// Alternatively, you can use named export:
// export { FetchDataComponent };