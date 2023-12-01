import React from "react";
var inputStyle = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600 mb-4";

export default function InputBox({ textarea, label, ...props }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
      {textarea ? <textarea className={inputStyle} {...props} /> : <input className={inputStyle} {...props} />}
    </div>
  );
}
