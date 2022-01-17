import React from 'react';
import { useMediaQuery } from 'react-responsive';

export const DesktopOrTablet = ({ children }) => {
  const isDesktopOrTablet = useMediaQuery({
    query: '(min-width:768px)',
  });
  return <>{isDesktopOrTablet && children}</>;
};

// export const Tablet = ({ children }) => {
//   const isTablet = useMediaQuery({
//     query: '(min-width: 768px) and (max-width: 991px)',
//   });
//   return <>{isTablet && children}</>;
// };

export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({
    query: '(min-width:0px) and (max-width:767px)',
  });
  return <>{isMobile && children}</>;
};
