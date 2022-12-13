import useReactRouter from "use-react-router";

const UseRouterSample = () => {
  const { location, match, history } = useReactRouter();
  console.log(location, match, history);
  return null;
};

export default UseRouterSample;
