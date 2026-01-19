import { tw } from '@shared/lib/Tailwindest';

export const detailContainer = tw.style({
    width: 'w-full',
    minHeight: 'min-h-screen',
    backgroundColor: 'bg-My_Black',

    // 화면 크기에 따라 패딩 조정
    paddingX: 'px-4',
    "@sm": { paddingX: "sm:px-6" },
    "@md": { paddingX: "md:px-8" },

    maxWidth: 'max-w-screen-lg',
    marginX: 'mx-auto',
    overflow: 'overflow-auto',
});
