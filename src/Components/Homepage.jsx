import React from "react";
import { useState, useEffect, useRef } from "react";
import Dropdown from "react-bootstrap/Dropdown";
function Homepage() {
  const [username, setUserName] = useState("");
  const [dropName, setDropName] = useState("Skills");
  return (
    <>
      <div className="containerr" style={{ overflow: "scroll", margin: "20px", alignItems: "center"}}>
        <h1 style={{ justifyContent: "center", display: "flex" }}>User Data</h1>
        <form>
          <div>
            <label for="username" className="form-label" style={{ fontSize: "20px" }}>
              Username
            </label>
            <input
              type="text"
              name="username"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={username}
              onChange={(event) => setUserName(event.target.value)}
            />
          </div>
          <div className="mb-3 my-3">
            <label for="exampleInputPassword1" className="form-label" style={{ fontSize: "20px" }}>
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="radioo" style={{ fontSize: "20px" }}>
            <label className="mb-3 lfg">Gender Fields</label>
            <div className="mb-3 form-check">
              <input
                type="radio"
                className="form-check-input"
                name="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Male
              </label>
            </div>
            <div>
              <div className="mb-3 form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Female
                </label>
              </div>
            </div>
            <div>
              <div className="mb-3 form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Don't want to specify
                </label>
              </div>
            </div>
          </div>
          <div class="dropdown">
            <Dropdown onSelect={(eventKey) => setDropName(eventKey)}>
              <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ fontSize: "20px" ,padding:"10px 30px 10px 30px"}}>
                {dropName}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="API">API</Dropdown.Item>
                <Dropdown.Item eventKey="JS">JS</Dropdown.Item>
                <Dropdown.Item eventKey="React">React</Dropdown.Item>
                <Dropdown.Item eventKey="Backend">Backend</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <button
            type="submit"
            className="btn btn-primary my-3"
            style={{ fontSize: "20px" ,padding:"10px 30px 10px 30px"}}
            onClick={() =>
              username != ""
                ? alert("You're logged in successfully")
                : alert("Please fill all the details")
            }
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
export default Homepage;