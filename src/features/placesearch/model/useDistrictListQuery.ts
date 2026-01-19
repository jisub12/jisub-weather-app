import { getDistrictList } from "@entities/place/api/getDistricList";
import { useQuery } from "@tanstack/react-query";

// 행정구역 목록 조회
export function useDistrictListQuery() {
    return useQuery({
        queryKey: ["districts"],
        queryFn: getDistrictList,
        staleTime: 1000 * 60 * 60, // 1시간 캐시
    });
}