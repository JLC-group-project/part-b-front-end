import React from 'react'

function Alert({children}) {
  return (
    <div
      className="text-red-500 text-xs italic mt-3"
      role="alert"
    >
      {/* <strong className="font-bold"> */}
        {children}
      {/* </strong> */}
    </div>
  );
}

export default Alert