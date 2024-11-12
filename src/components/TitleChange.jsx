import { useEffect } from "react";

const TitleChange = () => {
  useEffect(() => {
    const handleBlur = () => {
      document.title = "Come back :(";
    };

    const handleFocus = () => {
      document.title = "Angelo Maiele";
    };

    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  return null;
};

export default TitleChange;
