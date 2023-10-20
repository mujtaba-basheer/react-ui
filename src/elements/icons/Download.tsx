import { SvgIcon } from '@mui/material';
import { translateFill } from './translate-fill';

export const Download = ({ color = 'currentColor', size }: IconProps) => {
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
        <g clipPath="url(#clip0_898_42517)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 3C12.4142 3 12.75 3.33579 12.75 3.75V14.25C12.75 14.6642 12.4142 15 12 15C11.5858 15 11.25 14.6642 11.25 14.25V3.75C11.25 3.33579 11.5858 3 12 3Z"
            fill={fill}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.75 13.5C4.16421 13.5 4.5 13.8358 4.5 14.25V19.5H19.5V14.25C19.5 13.8358 19.8358 13.5 20.25 13.5C20.6642 13.5 21 13.8358 21 14.25V19.5C21 19.8978 20.842 20.2794 20.5607 20.5607C20.2794 20.842 19.8978 21 19.5 21H4.5C4.10218 21 3.72065 20.842 3.43934 20.5607C3.15804 20.2794 3 19.8978 3 19.5V14.25C3 13.8358 3.33579 13.5 3.75 13.5Z"
            fill={fill}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.71967 9.96967C8.01256 9.67678 8.48744 9.67678 8.78033 9.96967L12 13.1893L15.2197 9.96967C15.5126 9.67678 15.9874 9.67678 16.2803 9.96967C16.5732 10.2626 16.5732 10.7374 16.2803 11.0303L12.5303 14.7803C12.2374 15.0732 11.7626 15.0732 11.4697 14.7803L7.71967 11.0303C7.42678 10.7374 7.42678 10.2626 7.71967 9.96967Z"
            fill={fill}
          />
        </g>
        <defs>
          <clipPath id="clip0_898_42517">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};
