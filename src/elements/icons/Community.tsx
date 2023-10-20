import { SvgIcon } from '@mui/material';
import { translateFill } from './translate-fill';

export const Community = ({ color = 'currentColor', size }: IconProps) => {
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
        <g clipPath="url(#clip0_898_42526)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.5 2.25C5.42893 2.25 3.75 3.92893 3.75 6C3.75 7.09809 4.22197 8.08594 4.97413 8.77176C4.86453 8.81906 4.75613 8.86949 4.64906 8.92303C3.76385 9.36563 2.99386 10.0083 2.40004 10.8C2.15152 11.1314 2.21867 11.6015 2.55004 11.85C2.88142 12.0985 3.35152 12.0314 3.60004 11.7C4.05414 11.0945 4.64296 10.6031 5.31988 10.2647C5.9968 9.92621 6.74322 9.75 7.50004 9.75C8.25686 9.75 9.00329 9.92621 9.68021 10.2647C10.3571 10.6031 10.946 11.0945 11.4 11.7C11.5417 11.8889 11.764 12 12 12C12.2361 12 12.4584 11.8889 12.6 11.7C13.0541 11.0945 13.643 10.6031 14.3199 10.2647C14.9968 9.92621 15.7432 9.75 16.5 9.75C17.2569 9.75 18.0033 9.92621 18.6802 10.2647C19.3571 10.6031 19.946 11.0945 20.4 11.7C20.6486 12.0314 21.1187 12.0985 21.45 11.85C21.7814 11.6015 21.8486 11.1314 21.6 10.8C21.0062 10.0082 20.2362 9.36563 19.351 8.92303C19.2439 8.86948 19.1355 8.81904 19.0259 8.77174C19.778 8.08592 20.25 7.09807 20.25 6C20.25 3.92893 18.5711 2.25 16.5 2.25C14.4289 2.25 12.75 3.92893 12.75 6C12.75 7.09809 13.222 8.08594 13.9741 8.77176C13.8645 8.81906 13.7561 8.86949 13.6491 8.92303C13.0377 9.22868 12.4814 9.62973 12 10.1094C11.5187 9.62973 10.9623 9.22868 10.351 8.92303C10.2439 8.86948 10.1355 8.81904 10.0259 8.77174C10.778 8.08592 11.25 7.09807 11.25 6C11.25 3.92893 9.57107 2.25 7.5 2.25ZM5.25 6C5.25 4.75736 6.25736 3.75 7.5 3.75C8.74264 3.75 9.75 4.75736 9.75 6C9.75 7.24264 8.74264 8.25 7.5 8.25C6.25736 8.25 5.25 7.24264 5.25 6ZM16.5 3.75C15.2574 3.75 14.25 4.75736 14.25 6C14.25 7.24264 15.2574 8.25 16.5 8.25C17.7426 8.25 18.75 7.24264 18.75 6C18.75 4.75736 17.7426 3.75 16.5 3.75Z"
            fill={fill}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.5 12C5.42893 12 3.75 13.6789 3.75 15.75C3.75 16.8481 4.22198 17.8359 4.97413 18.5218C4.86453 18.5691 4.75613 18.6195 4.64906 18.673C3.76385 19.1156 2.99386 19.7582 2.40004 20.55C2.15152 20.8814 2.21867 21.3515 2.55004 21.6C2.88142 21.8485 3.35152 21.7814 3.60004 21.45C4.05414 20.8445 4.64296 20.3531 5.31988 20.0147C5.9968 19.6762 6.74322 19.5 7.50004 19.5C8.25686 19.5 9.00329 19.6762 9.68021 20.0147C10.3571 20.3531 10.946 20.8445 11.4 21.45C11.5417 21.6389 11.764 21.75 12 21.75C12.2361 21.75 12.4584 21.6389 12.6 21.45C13.0541 20.8445 13.643 20.3531 14.3199 20.0147C14.9968 19.6762 15.7432 19.5 16.5 19.5C17.2569 19.5 18.0033 19.6762 18.6802 20.0147C19.3571 20.3531 19.946 20.8445 20.4 21.45C20.6486 21.7814 21.1187 21.8485 21.45 21.6C21.7814 21.3515 21.8486 20.8814 21.6 20.55C21.0062 19.7582 20.2362 19.1156 19.351 18.673C19.2439 18.6195 19.1355 18.569 19.0259 18.5217C19.778 17.8359 20.25 16.8481 20.25 15.75C20.25 13.6789 18.5711 12 16.5 12C14.4289 12 12.75 13.6789 12.75 15.75C12.75 16.8481 13.222 17.8359 13.9741 18.5218C13.8645 18.5691 13.7561 18.6195 13.6491 18.673C13.0377 18.9787 12.4814 19.3797 12 19.8594C11.5187 19.3797 10.9623 18.9787 10.351 18.673C10.2439 18.6195 10.1355 18.569 10.0259 18.5217C10.778 17.8359 11.25 16.8481 11.25 15.75C11.25 13.6789 9.57107 12 7.5 12ZM5.25 15.75C5.25 14.5074 6.25736 13.5 7.5 13.5C8.74264 13.5 9.75 14.5074 9.75 15.75C9.75 16.9926 8.74264 18 7.5 18C6.25736 18 5.25 16.9926 5.25 15.75ZM16.5 13.5C15.2574 13.5 14.25 14.5074 14.25 15.75C14.25 16.9926 15.2574 18 16.5 18C17.7426 18 18.75 16.9926 18.75 15.75C18.75 14.5074 17.7426 13.5 16.5 13.5Z"
            fill={fill}
          />
        </g>
        <defs>
          <clipPath id="clip0_898_42526">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};
