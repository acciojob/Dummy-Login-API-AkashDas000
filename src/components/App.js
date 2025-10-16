import React, { useState } from "react";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmailmsg, setErrorEmailMsg] = useState("");
  const [errorPasswordmsg, setPasswordMsg] = useState("");

  const data = [
    {
      id: 1,
      name: "ABC",
      email: "abc@gmail.com",
      password: "12",
    },
    {
      id: 2,
      name: "DEF",
      email: "def@gmail.com",
      password: "1234",
    },
    {
      id: 3,
      name: "GHI",
      email: "ghi@gmail.com",
      password: "123456",
    },
  ];

  return (
    <div>
      <input onChange={(e) => setEmail(e.target.value)} id="input-email" />
      <p id="user-error">{errorEmailmsg}</p>
      <input
        onChange={(e) => setPassword(e.target.value)}
        id="input-password"
      />
      <p id="password-error">{errorPasswordmsg}</p>

      <button
        onClick={() => {
          const foundItem = data.find((item) => {
            return item.email == email;
          });
          if (!foundItem) {
            setErrorEmailMsg("User not found");
            return;
          }
          if (password != foundItem.password) {
            setPasswordMsg("Password Incorrect");
          }
        }}
        id="submit-form-btn"
      >
        Submit
      </button>
    </div>
  );
};

export default App;
