import React from "react";

type InputProps = {
  min?: number;
  max?: number;
  label: string;
};

export const Input: React.FC<InputProps> = ({ min, max, label }) => {
  return(
    <div className="form-control" style={{ width: "10rem"}}>
      <label className="label">
        <span className="label-texts font-bold">
          {label}
        </span>
      </label>
  <input type="text" placeholder="Enter a number..." className="input input-bordered"/>
</div>
  );
};
