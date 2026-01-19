import type { FavoriteItem } from "../model/storage"
import type { CurrentWeather } from "@entities/weather/model/types";
import { FavoriteCard } from "./FavoriteCard";

type WeatherState = {
    data?: CurrentWeather | null;
    isLoading: boolean;
    isError?: boolean;
}

type Props = {
    itemList: FavoriteItem[];
    onRemove: (key: string) => void;
    onRename: (key: string, alias: string) => void;
    onClick: (key: string) => void;
    weatherByKey?: Record<string, WeatherState>;
};

export const FavoriteList = ({ itemList, onRemove, onRename, onClick, weatherByKey }: Props) => {
    if (itemList.length === 0) return <div className="text-sm text-gray-500">즐겨찾기가 없습니다.</div>;

    return (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 auto-rows-max">
            {itemList.map((i) => (
                <FavoriteCard
                    key={i.key}
                    item={i}
                    onRemove={onRemove}
                    onRename={onRename}
                    onClick={onClick}
                    weatherState={weatherByKey?.[i.key]}
                />
            ))}
        </div>
    )
}