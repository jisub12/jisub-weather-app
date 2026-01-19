import { useQuery } from "@tanstack/react-query";
import type { LatLon } from "@entities/weather/model/types";
import { fetchCurrentWeather } from "@entities/weather/api/openWeather";

// 현재 날씨 조회
export function useCurrentWeatherQuery(pos: LatLon | null) {
  return useQuery({
    queryKey: ["weather", "current", pos?.lat, pos?.lon],
    queryFn: () => fetchCurrentWeather(pos as LatLon),
    enabled: !!pos,
  });
}