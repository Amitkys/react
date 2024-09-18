// EditableTitle.jsx
import React, { useState } from 'react';

function EditableTitle() {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("This is the title");

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <>
      {isEditing ? (
        <input
          type="text"
          value={title}
          onBlur={handleBlur}
          onChange={handleChange}
          autoFocus
        />
      ) : (
        <p onDoubleClick={handleDoubleClick}>{title}</p>
      )}
    </>
  );
}

export default EditableTitle;
