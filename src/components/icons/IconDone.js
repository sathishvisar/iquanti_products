import React from 'react';

const IconDone = ({ width = 14, height = 14, color = "#15DB95", style = 1}) => {
  const svgPath ="M 22.566406 4.730469 L 20.773438 3.511719 C 20.277344 3.175781 19.597656 3.304688 19.265625 3.796875 L 10.476563 16.757813 L 6.4375 12.71875 C 6.015625 12.296875 5.328125 12.296875 4.90625 12.71875 L 3.371094 14.253906 C 2.949219 14.675781 2.949219 15.363281 3.371094 15.789063 L 9.582031 22 C 9.929688 22.347656 10.476563 22.613281 10.96875 22.613281 C 11.460938 22.613281 11.957031 22.304688 12.277344 21.839844 L 22.855469 6.234375 C 23.191406 5.742188 23.0625 5.066406 22.566406 4.730469 Z";

  const svgPath1 ="M 14.5 2.792969 L 5.5 11.792969 L 1.851563 8.148438 L 1.5 7.792969 L 0.792969 8.5 L 1.148438 8.851563 L 5.5 13.207031 L 15.207031 3.5 Z";

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height}>
      <path d={style == 1 ? svgPath : svgPath1}  fill={color}/>
    </svg>
  );
};

export default IconDone;

