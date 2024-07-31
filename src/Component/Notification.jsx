// src/components/Notifications.js
import React from 'react';

const Notifications = ({ message }) => {
  return (
    <div className="notifications">
      <p>{message}</p>
    </div>
  );
};

export default Notifications;
