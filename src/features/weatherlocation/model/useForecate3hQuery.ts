import { useQuery } from "@tanstack/react-query";
import type { LatLon } from "@entities/weather/model/types";
import { fetchForecast3h } from "@entities/weather/api/openWeather";

// 3시간 단위 기온 조회
export function useForecast3hQuery(pos: LatLon | null) {
    return useQuery({
        queryKey: ["weather", "forecast3h", pos?.lat, pos?.lon],
        queryFn: () => fetchForecast3h(pos as LatLon),
        enabled: !!pos,
    });
}