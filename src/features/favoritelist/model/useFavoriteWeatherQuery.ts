import type { CurrentWeather } from "@entities/weather/model/types";
import type { FavoriteItem } from "./storage";
import { fetchCurrentWeather } from "@entities/weather/api/openWeather";
import { parsePlace } from "@entities/place/lib/parse";
import { geocodePlace } from "@entities/place/api/geocode";
import { useQueries } from "@tanstack/react-query";

// 즐겨찾기 1건의 위치를 지오코딩 후 현재 날씨 조회
async function fetchFavoriteWeather(item: FavoriteItem): Promise<CurrentWeather | null> {
    const place = parsePlace(item.key);
    const pos = await geocodePlace(place);
    if (!pos) return null;
    return fetchCurrentWeather(pos);
}

// 즐겨찾기 목록에 대해 날씨 조회 쿼리를 병렬 생성
export function useFavoriteWeather(itemList: FavoriteItem[]) {
    return useQueries({
        queries: itemList.map((item) => ({
            queryKey: ["favorite_weather", item.key],
            queryFn: () => fetchFavoriteWeather(item),
            staleTime: 1000 * 60 * 5, // 5분
        }))
    })
}