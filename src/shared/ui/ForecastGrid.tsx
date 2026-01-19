import type { Hourly3hForecastItem } from "@entities/weather/model/types"

type Props = {
    itemList: Hourly3hForecastItem[];
    limit?: number;
}

export const ForecastGrid = ({ itemList, limit = 9 }: Props) => {
    return (
        <div className="grid grid-cols-3 gap-2">
            {itemList.slice(0, limit).map((i) => (
                <div key={i.dt} className="rounded-lg bg-My_Dark2 p-2 text-sm">
                    <div>{new Date(i.dt * 1000).getHours()}시</div>
                    <div className="text-lg">{Math.round(i.temp)}°</div>
                </div>
            ))}
        </div>
    );
};