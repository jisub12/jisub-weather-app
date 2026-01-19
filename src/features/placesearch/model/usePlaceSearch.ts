import { normalize } from "@entities/place/lib/normalize";
import { parsePlace } from "@entities/place/lib/parse";
import type { Place } from "@entities/place/model/types";
import { useMemo } from "react";

// 행정구역 검색 결과 조회
export function usePlaceSearch(list: string[] | undefined, query: string) {
    const normalizedQuery = normalize(query);

    // useMomo 사용 이유 :
    // 검색 결과 계산이 mpa -> filter -> sort -> slice로 꽤 비싼 작업이라,
    // list나 normalizedQuery가 바뀔 때만 재계산해서 렌더 성능을 지키려는 목적
    return useMemo(() => {
        if (!list || !normalizedQuery) return [] as Place[];

        const resultList = list
            .map(parsePlace)
            .filter((p) => {
                const key = normalize(p.key);
                const label = normalize(p.label);
                return key.includes(normalizedQuery) || label.includes(normalizedQuery);
            })
            .sort((a, b) => a.partListLength - b.partListLength); // 더 상위 단위 먼저 노출

        return resultList.slice(0, 30);
    }, [list, normalizedQuery]);
}