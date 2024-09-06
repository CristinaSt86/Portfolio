import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const useNavHistory = () => {
  const location = useLocation();
  const [historyStack, setHistoryStack] = useState([]);

  useEffect(() => {
    setHistoryStack((prev) => [...prev, location.pathname]);
  }, [location]);

  const canGoBack = historyStack.length > 1;

  return canGoBack;
};

export default useNavHistory;
