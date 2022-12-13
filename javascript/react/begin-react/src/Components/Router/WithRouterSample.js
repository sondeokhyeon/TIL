import React from "react";
import { withRouter } from "react-router-dom";

const WithRouterSample = ({ location, match, history }) => {
  return (
    <div>
      <h4>location</h4>
      <textarea readOnly value={JSON.stringify(location, null, 2)} />
      <h4>match</h4>
      <textarea readOnly value={JSON.stringify(match, null, 2)} />
      <button onClick={() => history.push("/router")}>홈으로</button>
    </div>
  );
};

export default withRouter(WithRouterSample);
