import { useEffect, useState } from "react";

export const useTheme = () => {
  // مقدار اولیه را مستقیم از localStorage می‌گیریم تا موقع رفرش صفحه پرش رنگی نداشته باشیم
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // هر بار که تم تغییر کرد، آن را در localStorage ذخیره و به تگ html اعمال می‌کنیم
  useEffect(() => {
    localStorage.setItem("theme", theme);
    
    // اعمال تم به کل پروژه (برای استفاده در CSS)
    document.documentElement.setAttribute("data-theme", theme);
    
    // اگر از کلاس استفاده می‌کنی:
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
};
