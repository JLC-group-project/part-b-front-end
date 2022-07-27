import React from 'react'

// Alert users with error messages as the children
function Alert({children}) {
  return (
    <div
      className="text-red-500 text-xs italic mt-3"
      role="alert"
    >
        {children}
    </div>
  );
}

export default Alert