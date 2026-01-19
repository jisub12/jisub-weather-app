import { createTools, type Tailwindest } from 'tailwindest';

type TailwindCustom = Tailwindest<{
  
  color:
  | 'My_Red'
  | 'My_Black'
  | 'My_White'
  | 'My_Gray1'
  | 'My_Gray2'
  | 'My_Gray3'
  | 'My_Gray4'
  | 'My_Gray5'
  | 'My_PointB'
  | 'My_ExcelG'
  | 'My_bg_cloudy' // 배경 흐리게
  screens: 'iphone' | 'ipad' | 'mac';
}>;

const tw = createTools<TailwindCustom>();

export { tw };
