import { ReactNode, useState, useEffect } from "react";
import { server } from "./mocks/browsers.ts";

const MockProvder = ({ children }: { children: ReactNode }) => {
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    const setServer = async () => {
      await server.start();
      setReady(true);
    };
    setServer();
  }, []);

  if (!isReady) return <></>;
  return <>{children}</>;
};

export default MockProvder;
