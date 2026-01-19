import { parsePlace } from "@entities/place/lib/parse";
import { usePlaceGeocodeQuery } from "@features/placesearch/model/usePlaceGeocodeQuery";
import { useCurrentWeatherQuery } from "@features/weatherlocation/model/useCurrentWeatherQuery";
import { useForecast3hQuery } from "@features/weatherlocation/model/useForecate3hQuery";
import { DetailWidget } from "@widgets/detail/DetailWidget";
import { useMemo } from "react";
import { useParams } from "react-router-dom"
import { detailContainer } from "./detail.styled";

export const Detail = () => {
    const { placeKey } = useParams(); // 장소 키
    const decodedKey = useMemo(() => decodeURIComponent(placeKey ?? ""), [placeKey]); // 장소 키 디코딩
    const place = useMemo(() => (decodedKey ? parsePlace(decodedKey) : null), [decodedKey]); // 장소 정보

    const geo = usePlaceGeocodeQuery(place); // 장소 위치 조회
    const pos = geo.data ?? null; // 장소 위치 (포지션)

    const current = useCurrentWeatherQuery(pos); // 현재 날씨 조회
    const forecast = useForecast3hQuery(pos); // 3시간 단위 기온 조회

    // 장소 정보가 없으면 에러 메시지 표시
    if (!place) return <div className="flex justify-center items-center h-screen p-4 text-My_Red">잘못된 주소입니다.</div>;
    if (geo.isLoading) return <div className="flex justify-center items-center h-screen p-4 text-My_Gray3">선택한 장소 위치를 찾는 중...</div>;
    if (geo.isFetched && geo.data === null) {
        return <div className="flex justify-center items-center h-screen p-4 text-My_Red">해당 장소의 정보가 제공되지 않습니다.</div>;
    }

    if (current.isLoading || forecast.isLoading) return <div className="flex justify-center items-center h-screen p-4 text-My_Gray3">날씨 불러오는 중...</div>;
    if (current.isError) return <div className="flex justify-center items-center h-screen p-4 text-My_Red">현재 날씨 로드 실패</div>;
    if (forecast.isError) return <div className="flex justify-center items-center h-screen p-4 text-My_Red">예보 로드 실패</div>;

    return (
        <div className={detailContainer.class}>
            <DetailWidget
                title={place.label}
                current={current.data}
                forecastItemList={forecast.data?.itemList ?? []}
            />
        </div>
    );
}