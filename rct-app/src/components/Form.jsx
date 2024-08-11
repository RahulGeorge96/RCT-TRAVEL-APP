import React, { useState } from 'react'

const Form = ({ destination, onSubmit, onCancel }) => {
  const [name, setName] = useState(destination ? destination.name : "");
  const [country, setCountry] = useState(
    destination ? destination.country : ""
  );
  const [description, setDescription] = useState(
    destination ? destination.description : ""
  );
  const [profileImg, setProfileImg] = useState(
    destination ? destination.profileImg : ""
  );
  const [averageBudget, setAverageBudget] = useState(
    destination ? destination.averageBudget : ""
  );
  const [adminFlag, setAdminFlag] = useState(
    destination ? destination.adminFlag : false
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name,
      country,
      description,
      profileImg,
      averageBudget,
      adminFlag,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="text"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        placeholder="Country"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <input
        type="text"
        value={profileImg}
        onChange={(e) => setProfileImg(e.target.value)}
        placeholder="Profile Image URL"
        required
      />
      <input
        type="number"
        value={averageBudget}
        onChange={(e) => setAverageBudget(e.target.value)}
        placeholder="Average Budget"
        required
      />
      <label>
        Admin Flag:
        <input
          type="checkbox"
          checked={adminFlag}
          onChange={(e) => setAdminFlag(e.target.checked)}
        />
      </label>
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default Form