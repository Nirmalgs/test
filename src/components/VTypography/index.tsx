import { ReactNode } from 'react';
import palette from '@/theme/palette';
import clsx from "clsx";

type TTag = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
export interface VTypographyProps {
  children?: ReactNode;
  variant?: TTag | 'body1' | 'body2' | 'body3' | 'body4';
  color?: keyof
  typeof palette.neutral | keyof
  typeof palette.primary | keyof
  typeof palette.success | keyof
  typeof palette.warning | keyof
  typeof palette.danger;
}

const VTypography: React.FC<VTypographyProps> = ({ children, variant, color}) => {
  let Tag:TTag = variant as TTag;
  Tag = variant?.startsWith('body') ? 'div' : variant as TTag;
  let extrnalClass = ""
  switch(variant) {
    case "body1" :
      extrnalClass = 'font-bold text-lg';
      break;
    case "body2" :
      extrnalClass = 'font-normal text-base';
      break;
    case "body3" :
      extrnalClass = 'font-normal text-sm';
      break;
    case "body4" :
      extrnalClass = 'font-normal text-xs';
      break
    default:
      extrnalClass = '';
  }

  const colorStyle = color ? 
    (palette.neutral[color as keyof typeof palette.neutral] || palette.primary[color as keyof typeof palette.primary]
      || palette.success[color as keyof typeof palette.success] || palette.danger[color as keyof typeof palette.danger]
      || palette.warning[color as keyof typeof palette.warning]
    ) : undefined;

  return (
    <div className="prose">
      <Tag className={clsx(extrnalClass)} style={{color: colorStyle}}>
        {children}
      </Tag>
    </div>
  );
};
export default VTypography;