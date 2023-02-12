import { SvgProps } from '@/types/svg';

const IconError = ({ width, height, fill, stroke }: SvgProps) => {
  return (
    <svg
      width={width ?? '14'}
      height={height ?? '14'}
      viewBox='0 0 14 14'
      fill={fill ?? 'none'}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M1.89567 6.99998C1.89567 4.18103 4.18088 1.89581 6.99984 1.89581C9.81879 1.89581 12.104 4.18103 12.104 6.99998C12.104 9.81893 9.81878 12.1041 6.99983 12.1041C4.18088 12.1041 1.89567 9.81893 1.89567 6.99998ZM6.99983 12.8333C3.77817 12.8333 1.1665 10.2216 1.1665 6.99998C1.16651 3.77832 3.77818 1.16664 6.99984 1.16665C10.2215 1.16665 12.8332 3.77832 12.8332 6.99998C12.8332 10.2216 10.2215 12.8333 6.99983 12.8333Z'
        fill={fill ?? '#FF6060'}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M6.63525 8.41669L6.63525 4.66669L7.36442 4.66669L7.36442 8.41669L6.63525 8.41669ZM6.63525 9.91669L6.63525 9.16669L7.36442 9.16669L7.36442 9.91669L6.63525 9.91669Z'
        fill={fill ?? '#FF6060'}
      />
    </svg>
  );
};

export default IconError;
