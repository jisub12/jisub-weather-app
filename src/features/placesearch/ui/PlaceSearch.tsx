import type { Place } from "@entities/place/model/types"
import { useDeferredValue, useState } from "react";
import { usePlaceSearch } from "../model/usePlaceSearch";
import { useDistrictListQuery } from "../model/useDistrictListQuery";
import { SearchIcon } from "@shared/ui";

type Props = {
    onSelect: (place: Place) => void;
};

export const PlaceSearch = ({ onSelect }: Props) => {
    const [query, setQuery] = useState("");
    // UI 업데이트를 덜 급한 값으로 지연처리해서 입력 지연 없이 부드럽게 렌더되도록 도와준다.
    // 예를 들어 검색에서 필터를 쓸 때 지연처리를 해준다.
    const deferredQuery = useDeferredValue(query);

    const districtList = useDistrictListQuery(); // 행정구역 목록 조회
    const resultList = usePlaceSearch(districtList.data, deferredQuery); // 검색 결과 조회

    const showEmpty =
        deferredQuery.trim().length > 0 && resultList.length === 0 && !districtList.isLoading; // 검색 결과가 없을 때 빈 메시지 표시

    return (
        <div className="relative w-full">
            {query.trim().length === 0 && (
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-My_Gray4" />
            )}
            <input
                className="w-full rounded-lg border pl-10 pr-3 py-2"
                placeholder="예: 서울특별시, 서초구, 양재동"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            {showEmpty && (
                <div>매칭되는 장소가 없습니다.</div>
            )}

            {resultList.length > 0 && (
                <ul className="max-h-60 overflow-y-auto rounded-lg border bg-My_Dark1">
                    {resultList.map((p) => (
                        <li
                            key={p.key}
                            className="cursor-pointer px-3 py-2 hover:bg-My_Dark2"
                            onClick={() => {
                                onSelect(p);
                                setQuery("");
                            }}

                        >
                            {p.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}