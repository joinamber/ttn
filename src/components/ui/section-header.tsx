
import { ReactNode } from 'react';

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
  underline?: boolean;
  align?: 'left' | 'center' | 'right';
  titleClassName?: string;
  descriptionClassName?: string;
}

/**
 * Reusable section header component
 * Used across different sections for consistent styling
 */
const SectionHeader = ({ 
  title, 
  description, 
  className = '',
  underline = false,
  align = 'center',
  titleClassName = '',
  descriptionClassName = '',
}: SectionHeaderProps) => {
  return (
    <div className={`${align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left'} max-w-3xl mx-auto mb-16 ${className}`}>
      <h2 className={`text-3xl md:text-4xl font-serif font-medium mb-4 ${underline ? 'relative inline-block' : ''} ${titleClassName}`}>
        {title}
        {underline && (
          <div className="absolute -bottom-3 left-0 w-full">
            <svg className="w-full h-2" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 5C40 -1 150 -1 199 5" stroke="#bfa094" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
          </div>
        )}
      </h2>
      {description && (
        <p className={`text-lg text-foreground/70 ${descriptionClassName}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
