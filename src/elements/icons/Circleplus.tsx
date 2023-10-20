import { SvgIcon } from '@mui/material';
import { translateFill } from './translate-fill';

export const Circleplus = ({ color = 'currentColor', size }: IconProps) => {
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
        <g clipPath="url(#clip0_898_42452)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 3.75C7.44365 3.75 3.75 7.44365 3.75 12C3.75 16.5563 7.44365 20.25 12 20.25C16.5563 20.25 20.25 16.5563 20.25 12C20.25 7.44365 16.5563 3.75 12 3.75ZM2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12ZM7.5 12C7.5 11.5858 7.83579 11.25 8.25 11.25H11.25V8.25C11.25 7.83579 11.5858 7.5 12 7.5C12.4142 7.5 12.75 7.83579 12.75 8.25V11.25H15.75C16.1642 11.25 16.5 11.5858 16.5 12C16.5 12.4142 16.1642 12.75 15.75 12.75H12.75V15.75C12.75 16.1642 12.4142 16.5 12 16.5C11.5858 16.5 11.25 16.1642 11.25 15.75V12.75H8.25C7.83579 12.75 7.5 12.4142 7.5 12Z"
            fill={fill}
          />
        </g>
        <defs>
          <clipPath id="clip0_898_42452">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};
