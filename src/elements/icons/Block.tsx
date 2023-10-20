import { SvgIcon } from '@mui/material';
import { translateFill } from './translate-fill';

export const Block = ({ color = 'currentColor', size }: IconProps) => {
  const fill = translateFill(color);

  return (
    <SvgIcon sx={{ width: size || '16px', height: size || '16px' }}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_898_42477)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.72072 5.66004C8.15134 4.46746 9.99188 3.75 12 3.75C16.5563 3.75 20.25 7.44365 20.25 12C20.25 14.0081 19.5325 15.8487 18.34 17.2793L6.72072 5.66004ZM5.66006 6.7207C4.46747 8.15132 3.75 9.99187 3.75 12C3.75 16.5563 7.44365 20.25 12 20.25C14.0081 20.25 15.8487 19.5325 17.2793 18.3399L5.66006 6.7207ZM12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25Z"
            fill={fill}
          />
        </g>
        <defs>
          <clipPath id="clip0_898_42477">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};
