import { ThemeProvider } from "@emotion/react";
import { IconButton, InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState, ChangeEvent } from "react";
import { Typography } from "../../elements/Typography";
import { Eye, Eyeslash, Search } from "../../elements/icons";
import { colors } from "../../styles/colors";
import { theme } from "../../theme";

interface Props {
  id: string;
  label: string;
  variant?: "standard" | "outlined";
  type?: "search" | "text" | "password" | "email" | "currency";
  placeholder?: string;
  onChange?: (e: any) => void;
  value?: string | number;
  disabled?: boolean;
  chartCount?: boolean;
  hasCharacterLimit?: boolean;
}

const currencyFormatter = (amount: number | string) => {
  return Number(amount)
    .toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    })
    .split("$")[1];
};

const numberRegex = /^[0-9]+$/;

export const Input = (props: Props) => {
  const CHARACTER_LIMIT = 50;

  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState(props.value || "");

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (e: any) => e.preventDefault();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let _value = e.target.value;

    if (String(_value).length === 0) {
      setValue("");
      props.onChange?.("");
      return;
    }

    if (props.type === "currency") _value = _value.replace(/,/g, "");

    if (props.hasCharacterLimit && String(_value).length > CHARACTER_LIMIT)
      return;
    else if (props.type === "currency" && !numberRegex.test(_value)) return;

    const parsedValue =
      props.type === "currency" ? currencyFormatter(_value) : _value;

    setValue(parsedValue);
    props.onChange?.(_value);
  };

  return (
    <ThemeProvider theme={theme}>
      <TextField
        value={value}
        id={props.id}
        name={props.id}
        label={props.label}
        disabled={props.disabled}
        variant={props.variant || "standard"}
        type={showPassword ? "text" : props.type}
        placeholder={props.placeholder}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <>
              {props.type === "password" && (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <Eye /> : <Eyeslash />}
                  </IconButton>
                </InputAdornment>
              )}
              {props.hasCharacterLimit && (
                <Typography
                  className="interRegular12"
                  sx={{ color: colors.grayText, pl: 1 }}
                >
                  {String(value).length}/{CHARACTER_LIMIT}
                </Typography>
              )}
              {props.type === "search" && (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    <Search />
                  </IconButton>
                </InputAdornment>
              )}
            </>
          ),
          startAdornment: (
            <>
              {props.type === "currency" && (
                <Typography className="interRegular16" sx={{ pr: 1 }}>
                  $
                </Typography>
              )}
            </>
          ),
        }}
      />
    </ThemeProvider>
  );
};
