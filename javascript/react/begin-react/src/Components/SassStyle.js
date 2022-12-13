import React from "react";
import Styled from "styled-components";
import Button from "./SassStyle/Button";
import "./SassStyle.scss";

const ITEM = Styled.div``;

export default () => {
  return (
    <ITEM className="App">
      <div className="buttons">
        <Button size="large">BUTTON</Button>
        <Button>BUTTON</Button>
        <Button size="small">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button color="gray" size="large">
          BUTTON
        </Button>
        <Button color="gray">BUTTON</Button>
        <Button color="gray" size="small">
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button color="pink" size="large">
          BUTTON
        </Button>
        <Button color="pink">BUTTON</Button>
        <Button color="pink" size="small">
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" outline>
          BUTTON
        </Button>
        <Button color="gray" outline>
          BUTTON
        </Button>
        <Button color="pink" size="small" outline>
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" fullwidth outline>
          BUTTON
        </Button>
        <Button size="large" fullwidth>
          BUTTON
        </Button>
        <Button size="large" color="gray" fullwidth outline>
          BUTTON
        </Button>
        <Button size="large" color="gray" fullwidth className="btn btn2 btn3">
          BUTTON
        </Button>
        <Button
          size="large"
          color="pink"
          fullwidth
          outline
          onClick={() => {
            console.log("클릭!@@@");
          }}
        >
          BUTTON
        </Button>
        <Button
          size="large"
          color="pink"
          fullwidth
          onClick={() => {
            console.log("클릭클릭!!");
          }}
        >
          BUTTON
        </Button>
      </div>
    </ITEM>
  );
};
