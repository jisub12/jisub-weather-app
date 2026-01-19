import type { Place } from "../model/types";

// 행정구역 데이터 파싱
export function parsePlace(text: string): Place {
    const partList = text.split("-").filter(Boolean);
    return {
        key: text,
        label: partList.join(" "),
        partList,
        partListLength: partList.length,
    }
}