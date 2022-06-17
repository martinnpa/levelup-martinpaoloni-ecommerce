import React, { useContext } from "react";
import { generalContext } from 'context';

// Component created to use the context and apply change of mode

const Container = ({children}) => {
  const { tecoMode } = useContext(generalContext);
  return (
    <div className={`min-h-screen pb-8 relative ${tecoMode ? "theme-teco" : "theme-dashboard"}`}>{children}</div>
  )
}

export default Container