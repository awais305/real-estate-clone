import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";

const TextFieldComponent = ({
  variant,
  label,
  inputMode,
  height,
  width,
  onChange,
  maxRows,
  inputRef,
  type,
  backgroundColor,
  placeholder,
  prefixIconPath,
  isPasswordField,
  borderRadius,
  borderColor,
  className,
  classNameLabel,
  classNameField,
  marginTop,
  marginBottom,
  maxLength,
  textAlign,
  isMultiline,
  disabled,
}) => {
  const [showPassword, setShowPassword] = React.useState(!isPasswordField);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className={className}
      style={{ display: "flex", flexDirection: "column", width: width }}
    >
      <span
        className={classNameLabel}
        style={{ fontWeight: "400", fontSize: "14px", color: "var(--black)" }}
      >
        {label}
      </span>
      <TextField
        className={classNameField}
        disabled={disabled}
        variant={variant || "outlined"}
        inputRef={inputRef}
        type={type ? type : showPassword ? "text" : "password"}
        sx={{
          borderRadius: borderRadius || "5px",
          background: backgroundColor || "#F4F6F9",
          margin: `${marginTop || "10px"} 0 ${marginBottom || "20px"} 0`,
          "& .MuiOutlinedInput-root": {
            borderRadius: borderRadius || "5px",
            borderColor: borderColor || "var(--borderColor)",
            "& fieldset": {
              borderColor: borderColor || "var(--borderColor)",
            },
            "&:hover fieldset": {
              borderColor: borderColor || "var(--borderColor)",
            },
            "&.Mui-focused fieldset": {
              borderWidth: "1px",
              borderColor: borderColor || "var(--borderColor)",
            },
          },
          "& .MuiInputBase-root": {
            height: height || "var(--textfieldHeight)",
            alignItems: isMultiline && "start",
          },
          // after adjusting height, align the label
          "&.MuiTextField-root label": { top: "-2px" },
          "&.MuiTextField-root label[data-shrink='true']": { top: 0 },
          "& .MuiInputBase-input": {
            fontSize: "15px",
            fontWeight: "400",
            textAlign: textAlign, // Align the text to the center
          }, // Hide increments and decrements
          "& input[type='number']::-webkit-inner-spin-button, & input[type='number']::-webkit-outer-spin-button":
            {
              WebkitAppearance: "none",
              margin: 0,
            },
        }}
        onInput={(e) => {
          if (type === "number" && e.target.value && maxLength) {
            e.target.value = Math.max(0, parseInt(e.target.value))
              .toString()
              .slice(0, maxLength);
          }
        }}
        InputProps={{
          startAdornment: prefixIconPath && (
            <img
              src={prefixIconPath}
              style={{
                // height: "20px",
                width: "17px",
                marginRight: "20px",
                marginTop: isMultiline ? "2px" : "",
              }}
              alt=""
            />
          ),
          endAdornment: isPasswordField && (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        onChange={onChange}
        // label={label}
        placeholder={placeholder}
        maxRows={maxRows}
        multiline={isMultiline}
      />
    </div>
  );
};

export default TextFieldComponent;
