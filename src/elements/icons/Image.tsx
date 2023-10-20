import { SvgIcon } from '@mui/material';
import { translateFill } from './translate-fill';

export const Image = ({ color = 'currentColor', size }: IconProps) => {
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
        <g clipPath="url(#clip0_898_42396)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 4.5C3 3.67157 3.67157 3 4.5 3H19.5C20.3284 3 21 3.67157 21 4.5V15V19.5C21 20.3284 20.3284 21 19.5 21H4.5C3.67157 21 3 20.3284 3 19.5V16.5V4.5ZM19.5 4.5V13.1894L16.8187 10.5081L16.8164 10.5057C16.6773 10.3651 16.5118 10.2534 16.3293 10.177C16.1458 10.1002 15.9489 10.0606 15.75 10.0606C15.5511 10.0606 15.3542 10.1002 15.1707 10.177C14.9882 10.2534 14.8227 10.3651 14.6836 10.5057L10.504 14.6853L10.5 14.6894L8.5664 12.7557C8.42731 12.6151 8.26178 12.5034 8.07933 12.427C7.89585 12.3502 7.69892 12.3106 7.5 12.3106C7.30108 12.3106 7.10415 12.3502 6.92067 12.427C6.73823 12.5034 6.57271 12.6151 6.43363 12.7557L4.5 14.6893V4.5H19.5ZM7.49597 13.8147L4.5 16.8107V19.5H19.5V15.3107L15.75 11.5606L15.746 11.5647L11.5664 15.7443C11.4273 15.8849 11.2618 15.9966 11.0793 16.073C10.8958 16.1498 10.6989 16.1894 10.5 16.1894C10.3011 16.1894 10.1042 16.1498 9.92067 16.073C9.73822 15.9966 9.57269 15.8849 9.43361 15.7443L7.49998 13.8106L7.49597 13.8147ZM10.5 8.625C10.5 9.24632 9.99632 9.75 9.375 9.75C8.75368 9.75 8.25 9.24632 8.25 8.625C8.25 8.00368 8.75368 7.5 9.375 7.5C9.99632 7.5 10.5 8.00368 10.5 8.625Z"
            fill={fill}
          />
        </g>
        <defs>
          <clipPath id="clip0_898_42396">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};