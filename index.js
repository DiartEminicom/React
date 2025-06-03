import React from "react";

const UserProfile = () => {
  // Profile data (could come from props or API in a real app)
  const name = "Arta";
  const age = 22;
  const job = "Graphic Designer";
  const funFact = "I can solve a Rubik's cube in under a minute.";

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-2xl">
      <h1 className="text-2xl font-bold mb-4">👤 Profile</h1>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Age:</strong> {age}
      </p>
      <p>
        <strong>Job:</strong> {job}
      </p>
      <p>
        <strong>Fun Fact:</strong> {funFact}
      </p>
    </div>
  );
};

export default UserProfile;
