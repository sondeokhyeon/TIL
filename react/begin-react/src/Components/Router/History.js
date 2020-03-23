import React, { useEffect } from "react";

const History = ({ history }) => {
  const goback = () => {
    history.goBack();
  };

  const goHome = () => {
    history.push("/router");
  };

  const replaceToHome = () => {
    history.replace("/");
  };

  useEffect(() => {
    console.log(history);
    const unblock = history.block("정말 떠나실건가요?");
    return () => {
      unblock();
    };
  }, [history]);

  return (
    <div>
      <button onClick={goback}>뒤로가기</button>
      <button onClick={goHome}>홈으로</button>
      <button onClick={replaceToHome}>홈으로 (Replace)</button>
    </div>
  );
};

export default History;
