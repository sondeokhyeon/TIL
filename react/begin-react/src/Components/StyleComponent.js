import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Button from "./StyleComponent/Button";
import Dialog from "./StyleComponent/Dialog";

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

const palette = {
  blue: "#228be6",
  gray: "#496057",
  pink: "#f06595"
};

const App = () => {
  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
  };
  const onConfirm = () => {
    setDialog(false);
    console.log("확인");
  };
  const onCancle = () => {
    console.log("취소");
    setDialog(false);
  };

  return (
    <ThemeProvider theme={{ palette }}>
      <>
        <AppBlock>
          {/* <ButtonGroup>
            <Button size="large">BUTTON</Button>
            <Button color="gray">BUTTON</Button>
            <Button size="small" color="pink">
              BUTTON
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button size="large" outline>
              BUTTON
            </Button>
            <Button color="gray" outline>
              BUTTON
            </Button>
            <Button size="small" color="pink" outline>
              BUTTON
            </Button>
          </ButtonGroup> */}
          <ButtonGroup>
            {/* <Button size="large" fullwidth>
              BUTTON
            </Button>
            <Button color="gray" size="large" fullwidth>
              BUTTON
            </Button>
            <Button color="pink" size="large" fullwidth>
              BUTTON
            </Button> */}
            <Button color="pink" size="large" fullwidth onClick={onClick}>
              삭제
            </Button>
          </ButtonGroup>
        </AppBlock>
        <Dialog
          title="정말로 삭제하시겠습니까?"
          confirmText="삭제"
          cancleText="취소"
          visible={dialog}
          onConfirm={onConfirm}
          onCancle={onCancle}
        >
          데이터를 정말 삭제하시겠습니까?
        </Dialog>
      </>
    </ThemeProvider>
  );
};

export default App;
