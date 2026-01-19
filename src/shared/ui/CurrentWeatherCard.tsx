import type { CurrentWeather } from "@entities/weather/model/types";

type Props = {
    title: string;
    current?: CurrentWeather;
};

export const CurrentWeatherCard = ({ title, current }: Props) => {
    return (
        <div className="rounded-xl border p-4">
            <div className="font-semibold text-xl">{title}</div>
            <div className="text-3xl text-My_Red">{Math.round(current?.temp ?? 0)}°</div>
            <div className="text-sm text-My_Mint">
                최저 {Math.round(current?.tempMin ?? 0)}° / 최고 {Math.round(current?.tempMax ?? 0)}°
                · {current?.description}
            </div>
        </div>
    );
};