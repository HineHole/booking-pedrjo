import React, { useEffect, useState } from "react";

const Username = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://bookings-api-igtv.onrender.com/username");
      const data = await response.text();
      setText(data);
    };

    fetchData();
  }, []);

  return <div>User: {text}</div>;
};

export default Username;