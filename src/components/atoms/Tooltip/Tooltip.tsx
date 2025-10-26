import React, { } from 'react';

interface TooltipProps {
  text: string;
  pos?: number;
  customStyle?: string;
  children?: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, customStyle, children }) => {

  const arrowClasses = `
    absolute w-2 h-2 bg-gray-200 transform rotate-45
    left-3
  `;

  return (
    <div className="relative inline-block group">
      {children}
      <span className={`
    absolute min-h-[18px] bg-gray-200 rounded-lg px-3 py-2 text-xs font-medium text-gray-600 text-left
    max-w-[600px] md:max-w-[400px] z-[1000] opacity-0 invisible transition-all duration-300 ease-in-out
    pointer-events-none whitespace-nowrap group-hover:opacity-100 group-hover:visible
    ${customStyle || ''}
  `}>
        <p className="m-0 flex items-center justify-center leading-[18px]">{text}</p>
        <span className={arrowClasses}></span>
      </span>
    </div>
  );
};

export default Tooltip;
