import React, { useEffect, useState } from "react";
import "./CheckboxComponent.scss";

const CheckboxComponent = ({
  className,
  selectedItemsId,
  id,
  text,
  item,
  onChanged,
}) => {
  const [isChecked, setChecked] = useState(false);

  useEffect(() => {
    if (selectedItemsId) {
      selectedItemsId.forEach((selectedItemId) => {
        if (selectedItemId === id) {
          setChecked(true);
        }
      });
    }
  }, [selectedItemsId]);

  return (
    <div className={className || "checkbox_component"}>
      <input
        id={id}
        className="checkbox"
        type="checkbox"
        name={text}
        checked={isChecked}
        onChange={(e) => {
          setChecked(e.target.checked);
          onChanged(e.target.checked, item);
        }}
      />
      <label className="text" htmlFor={id}>
        {text}
      </label>
    </div>
  );
};

export default CheckboxComponent;
