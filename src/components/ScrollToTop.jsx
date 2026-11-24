import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    const timer = setTimeout(() => {
      AOS.refresh();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}