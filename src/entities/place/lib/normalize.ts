export function normalize(text: string): string {
    // 공백 제거 및 소문자 변환
    return text.replace(/\s+/g, "").toLowerCase();
}