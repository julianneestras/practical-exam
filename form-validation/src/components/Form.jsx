import { useState } from "react";

function Form() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [msgClassName, setMsgClassName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!isNameValid(userInfo.name)) {
      setErrorMessage("Name must be at least 3 characters long.");
      setMsgClassName("error");
      return;
    }

    if (!isValidatePassword(userInfo.password)) {
      setErrorMessage(
        "Password must be at least 8 characters long and contain at least one number and one special character."
      );
      setMsgClassName("error");
      return;
    }

    setErrorMessage("Form submitted successfully!");
    setMsgClassName("success");
    setUserInfo({
      name: "",
      email: "",
      password: "",
    });
  }

  function isNameValid(name) {
    return name.length > 2;
  }

  function isValidatePassword(password) {
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
    return regex.test(password);
  }

  //   TEMPLATE
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="register">Form Validation</h1>
      <p className="login">Login to get started.</p>

      {errorMessage && <p className={msgClassName}>{errorMessage}</p>}

      <div className="form-input">
        <input
          type="text"
          placeholder="Enter your name"
          value={userInfo.name}
          onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
        />
      </div>
      <div className="form-input">
        <input
          type="email"
          placeholder="Enter your email"
          value={userInfo.email}
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
        />
      </div>
      <div className="form-input">
        <input
          type="password"
          placeholder="Create a password"
          value={userInfo.password}
          onChange={(e) =>
            setUserInfo({ ...userInfo, password: e.target.value })
          }
        />
      </div>

      <button className="btn-submit">Submit</button>
    </form>
  );
}

export default Form;
