import React from 'react';

function User({name, updateUser}) {
  return (
    <div>
      <p>{name}</p>
      <input type="text" id="user_name" />
      <button onClick={() => (updateUser(document.getElementById('user_name').value))}>유저 이름 변경</button>
    </div>
  );
}

export default User;
