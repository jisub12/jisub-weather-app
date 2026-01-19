import type { CurrentWeather, Hourly3hForecastItem } from "@entities/weather/model/types";
import { BackIcon, ForecastGrid } from "@shared/ui";
import { CurrentWeatherCard } from "@shared/ui/CurrentWeatherCard";
import { useNavigate } from "react-router-dom";

type Props = {
    title: string;
    current?: CurrentWeather;
    forecastItemList: Hourly3hForecastItem[];
}

export const DetailWidget = ({ title, current, forecastItemList }: Props) => {
    const navigate = useNavigate();
    return (
        <>
            <button className="text-My_Gray3 p-4" onClick={() => navigate(-1)}>
                <BackIcon />
            </button>
            <div className="p-4 space-y-4">

                {/* <div className="rounded-xl border p-4">
                    <div className="text-lg font-semibold">{title}</div>
                    <div className="text-3xl text-My_Red">{Math.round(current?.temp ?? 0)}°</div>
                    <div className="text-sm text-My_Mint">
                        최저 {Math.round(current?.tempMin ?? 0)}° / 최고 {Math.round(current?.tempMax ?? 0)}°
                        · {current?.description}
                    </div>
                </div> */}
                <CurrentWeatherCard title={title} current={current} />

                <div className="rounded-xl border p-4">
                    <div className="font-semibold mb-2 text-xl">시간 단위 기온</div>
                    <ForecastGrid itemList={forecastItemList} />
                </div>
            </div>
        </>
    );
};