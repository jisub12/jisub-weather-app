import { useEffect, useState } from "react";
import type { LatLon } from "@entities/weather/model/types";
import { getCurrentPosition } from "@features/geolocation/model/getCurrentPosition";
import { useCurrentWeatherQuery } from "@features/weatherlocation/model/useCurrentWeatherQuery";
import { useForecast3hQuery } from "@features/weatherlocation/model/useForecate3hQuery";
import type { Place } from "@entities/place/model/types";
import { usePlaceGeocodeQuery } from "@features/placesearch/model/usePlaceGeocodeQuery";
import { useNavigate } from "react-router-dom";
import { useFavoriteList } from "@features/favoritelist";
import { useFavoriteWeather } from "@features/favoritelist/model/useFavoriteWeatherQuery";
import { homeContainer } from "./home.styled";
import { CurrentLocationWidget, FavoriteListWidget, ForecastWidget } from "@widgets/home";
import { BackIcon } from "@shared/ui";
import { Skeleton } from "@shared/ui/Skeleton";

export const Home = () => {
    const [pos, setPos] = useState<LatLon | null>(null); // 현재 위치
    const [geoError, setGeoError] = useState<string | null>(null); // 위치 오류
    const [selected, setSelected] = useState<Place | null>(null); // 선택한 장소

    const navigate = useNavigate();
    const favoriteList = useFavoriteList(); // 즐겨찾기 목록 관리
    const favoriteWeatherQueries = useFavoriteWeather(favoriteList.itemList);

    // 즐겨찾기 목록에 대해 날씨 조회 쿼리를 병렬 생성
    const weatherByKey = Object.fromEntries(
        favoriteList.itemList.map((item, index) => [item.key, favoriteWeatherQueries[index]])
    );

    // 현재 위치 가져오기
    useEffect(() => {
        getCurrentPosition()
            .then(setPos)
            .catch((e) => setGeoError(e?.message ?? "위치 정보를 가져오지 못했습니다."));
    }, []);

    // 선택 장소 -> 좌표 반환
    const selectedGeo = usePlaceGeocodeQuery(selected);
    const usingSelected = !!selected;
    const effectivePos = usingSelected ? selectedGeo.data ?? null : pos;

    // 날씨 조회 (선택 좌포가 있으면 선택 좌표 기준)
    const current = useCurrentWeatherQuery(effectivePos);
    const forecast = useForecast3hQuery(effectivePos);

    if (geoError) return <div className="flex justify-center items-center h-screen p-4 text-My_Red">위치 오류: {geoError}</div>;
    if (current.isLoading || forecast.isLoading) return <Skeleton />;

    return (
        <div className={homeContainer.class}>
            <button onClick={() => navigate(-1)}>
                <BackIcon />
            </button>
            {/* 현재 위치 */}
            <CurrentLocationWidget
                selected={selected}
                onSelect={setSelected}
                onAddFavorite={favoriteList.add}
                addError={favoriteList.error}
                current={current.data}
            />

            {/* 3시간 단위 기온 */}
            <ForecastWidget itemList={forecast.data?.itemList ?? []} />

            {/* 즐겨찾기 */}
            <FavoriteListWidget
                itemList={favoriteList.itemList}
                onRemove={favoriteList.remove}
                onRename={favoriteList.rename}
                onClick={(key) => navigate(`/detail/${encodeURIComponent(key)}`)}
                weatherByKey={weatherByKey}
            />
        </div>
    );
};