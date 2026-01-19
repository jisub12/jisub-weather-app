import { tw } from '@shared/lib/Tailwindest';

export const homeContainer = tw.style({
    width: 'w-full',
    minHeight: 'min-h-screen',
    backgroundColor: 'bg-My_Black',

    // 화면 크기에 따라 패딩 조정
    padding: 'p-4',
    "@sm": { padding: "sm:p-6" },
    "@md": { padding: "md:p-8" },

    maxWidth: 'max-w-screen-lg',
    marginX: 'mx-auto',
    overflow: 'overflow-auto',
});
