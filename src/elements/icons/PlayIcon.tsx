import { Box, SvgIcon } from '@mui/material';

export const PlayIcon = ({ color = 'currentColor', size }: IconProps) => {
  return (
    <Box
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.20)',
        backdropFilter: ' blur(10px)',
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <SvgIcon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <g clipPath="url(#clip0_12_578)">
            <path
              d="M27.2227 13.3946L10.3477 3.09377C10.0666 2.91565 9.74195 2.81816 9.40923 2.81196C9.07651 2.80576 8.74848 2.89108 8.46095 3.05862C8.16916 3.2187 7.92592 3.45448 7.75682 3.74113C7.58771 4.02778 7.499 4.35471 7.50001 4.68752V25.3125C7.499 25.6453 7.58771 25.9723 7.75682 26.2589C7.92592 26.5456 8.16916 26.7813 8.46095 26.9414C8.74848 27.109 9.07651 27.1943 9.40923 27.1881C9.74195 27.1819 10.0666 27.0844 10.3477 26.9063L27.2227 16.6055C27.4993 16.4386 27.728 16.2031 27.8869 15.9219C28.0457 15.6406 28.1291 15.323 28.1291 15C28.1291 14.677 28.0457 14.3595 27.8869 14.0782C27.728 13.7969 27.4993 13.5614 27.2227 13.3946Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_12_578">
              <rect width="30" height="30" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </SvgIcon>
    </Box>
  );
};
