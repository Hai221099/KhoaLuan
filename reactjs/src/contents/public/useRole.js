import { useState } from "react";

export default function useRole() {
  const getRole = () => {
    const roleString = localStorage.getItem("role");
    return roleString;
  };

  const [role, setRole] = useState(getRole());

  const saveRole = (userRole) => {
    localStorage.setItem("role", userRole);
    setRole(userRole);
  };

  return {
    setRole: saveRole,
    role,
  };
}
