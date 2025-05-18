import { useState, useEffect } from "react";

export function useHash() {
  const [hash, setHash] = useState<string>(() => 
    typeof window !== "undefined" ? window.location.hash.replace("#", "") : ""
  );

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash.replace("#", ""));
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return hash;
}
