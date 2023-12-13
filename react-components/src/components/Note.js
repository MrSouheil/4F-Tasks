import React from 'react';

const Note = ({ noteObject }) => {
  const { content, author, profilePic, id } = noteObject;

  return (
    <div className="note">
      <div className="note-content">{content}</div>
      <div className="note-author">
        <img
          src={profilePic}
          alt={`Profile Pic of ${author}`}
          className="profile-pic"
          style={{ width: '30px', height: '30px' }}
        />
        <span className="author-name">{author}</span>
      </div>
      <button className="inactive-button" disabled>
        <span role="img" aria-label="Delete Icon">
          🗑️
        </span>
      </button>
      <button className="inactive-button" disabled>
        <span role="img" aria-label="Edit Icon">
          ✏️
        </span>
      </button>
      <hr></hr>
    </div>
  );
};

export default Note;
