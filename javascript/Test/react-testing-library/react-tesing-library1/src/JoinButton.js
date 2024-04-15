const JoinButton = ({ age }) => {
  return (
    <>
      {age < 18 ? <button disabled>not allow</button> : <button>Join</button>}
    </>
  );
};

export default JoinButton;
