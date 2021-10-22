import React from "react";
import spinner from "../../assets/spinner_diagram.svg"

type SpinnerProps = {show?: boolean;}

export const Spinner: React.FC<SpinnerProps> = ({ show }) => {
  if (show) {
    return (
        <div>
            <img src={spinner} alt="spinner" />
        </div>
    );
  } else {
    return null;
  }
};

Spinner.defaultProps = {
    show: true
};
