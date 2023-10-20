import { SvgIcon } from '@mui/material';
import { translateFill } from './translate-fill';

export const List = ({ color = 'currentColor', size }: IconProps) => {
  const fill = translateFill(color);

  return (
    <SvgIcon sx={{ width: size || '16px', height: size || '16px' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clipPath="url(#clip0_5114_5550)">
          <path
            d="M5.25 6C5.25 6.62132 4.74632 7.125 4.125 7.125C3.50368 7.125 3 6.62132 3 6C3 5.37868 3.50368 4.875 4.125 4.875C4.74632 4.875 5.25 5.37868 5.25 6Z"
            fill={fill}
          />
          <path
            d="M8.25 5.25C7.83579 5.25 7.5 5.58579 7.5 6C7.5 6.41421 7.83579 6.75 8.25 6.75H20.25C20.6642 6.75 21 6.41421 21 6C21 5.58579 20.6642 5.25 20.25 5.25H8.25Z"
            fill={fill}
          />
          <path
            d="M8.25 11.25C7.83579 11.25 7.5 11.5858 7.5 12C7.5 12.4142 7.83579 12.75 8.25 12.75H20.25C20.6642 12.75 21 12.4142 21 12C21 11.5858 20.6642 11.25 20.25 11.25H8.25Z"
            fill={fill}
          />
          <path
            d="M7.5 18C7.5 17.5858 7.83579 17.25 8.25 17.25H20.25C20.6642 17.25 21 17.5858 21 18C21 18.4142 20.6642 18.75 20.25 18.75H8.25C7.83579 18.75 7.5 18.4142 7.5 18Z"
            fill={fill}
          />
          <path
            d="M4.125 13.125C4.74632 13.125 5.25 12.6213 5.25 12C5.25 11.3787 4.74632 10.875 4.125 10.875C3.50368 10.875 3 11.3787 3 12C3 12.6213 3.50368 13.125 4.125 13.125Z"
            fill={fill}
          />
          <path
            d="M5.25 18C5.25 18.6213 4.74632 19.125 4.125 19.125C3.50368 19.125 3 18.6213 3 18C3 17.3787 3.50368 16.875 4.125 16.875C4.74632 16.875 5.25 17.3787 5.25 18Z"
            fill={fill}
          />
        </g>
        <defs>
          <clipPath id="clip0_5114_5550">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};
