import { geocodePlace } from "@entities/place/api/geocode";
import type { Place } from "@entities/place/model/types";
import { useQuery } from "@tanstack/react-query";

// 장소 좌표 조회
export function usePlaceGeocodeQuery(place: Place | null) {
    return useQuery({
        queryKey: ["place-geo", place?.key],
        queryFn: () => geocodePlace(place!),
        // enabled : 쿼리를 실행할지 말지 결정한다. ex) true -> 쿼리 실행, false -> 실행하지 않음(대기)
        enabled: !!place, // 있으면 true, 없으면 false
    })
}