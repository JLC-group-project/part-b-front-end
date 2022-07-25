import React from 'react'

function Alert({children}) {
  return (
    <div
      class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong class="font-bold">
        {children}
      </strong>
    </div>
  );
}

export default Alert