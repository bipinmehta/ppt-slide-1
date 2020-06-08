import React from "react";

function handleClick() {}

function handleChange() {}

function App() {
  return (
    <div className="App">
      <button className="logo-button" onClick={handleClick}>
        Logo Here
      </button>
      {/* <input
        className="logo-button"
        type="file"
        accept="image/*"
        id="logo"
        name="logo"
        label="Logo"
        placeholder="Logo Here"
      /> */}

      <h1 className="heading1">AV Config</h1>
      <br />
      <div>
        <form onSubmit={handleClick}>
          <p>Username or email</p>
          <input
            onChange={handleChange}
            type="text"
            placeholder=""
            // value={name}
          />
          <p>Password</p>
          <input
            onChange={handleChange}
            type="text"
            placeholder=""
            // value={name}
          />
          <input
            className="remember"
            onChange={handleChange}
            type="text"
            placeholder=""
            // value={name}
          />
          <p className="para1">Remember me</p>

          <button
            type="submit"
            // onClick={handleClick}
            // style={{ backgroundColor: isMousedOver ? "black" : "white" }}
            // onMouseOver={handleMouseOver}
            // onMouseOut={handleMouseOut}
          >
            Log in
          </button>
          <p className="pswd-forgot">
            <em>Forgot your password?</em>
          </p>
        </form>
      </div>
    </div>
  );
}

export default App;
