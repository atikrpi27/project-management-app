import React, { forwardRef } from "react";

var inputStyle = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600 mb-4";

function InputBox({ textarea, label, ...props }, ref) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-left font-bold uppercase text-stone-500">{label}</label>
      {textarea ? <textarea ref={ref} className={inputStyle} {...props} /> : <input ref={ref} className={inputStyle} {...props} />}
    </div>
  );
}

export default forwardRef(InputBox);