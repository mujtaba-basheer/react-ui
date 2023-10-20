import { SvgIcon } from '@mui/material';
import { translateFill } from './translate-fill';

export const Unlock = ({ color = 'currentColor', size }: IconProps) => {
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
        <g clipPath="url(#clip0_898_42407)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.87868 3.12868C10.4413 2.56607 11.2044 2.25 12 2.25C13.4683 2.25 14.7404 3.29757 15.015 4.64933C15.0975 5.05525 15.4934 5.31746 15.8993 5.23498C16.3053 5.15251 16.5675 4.75659 16.485 4.35067C16.064 2.27868 14.1598 0.75 12 0.75C10.8065 0.75 9.66193 1.22411 8.81802 2.06802C7.97411 2.91193 7.5 4.05653 7.5 5.25V7.5H4.5C3.67157 7.5 3 8.17157 3 9V19.5C3 20.3284 3.67157 21 4.5 21H19.5C20.3284 21 21 20.3284 21 19.5V9C21 8.17157 20.3284 7.5 19.5 7.5H9V5.25C9 4.45435 9.31607 3.69129 9.87868 3.12868ZM4.5 9V19.5H19.5V9H4.5Z"
            fill={fill}
          />
        </g>
        <defs>
          <clipPath id="clip0_898_42407">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};
