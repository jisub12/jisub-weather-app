import type { FavoriteItem } from "@features/favoritelist/model/storage";
import { FavoriteList } from "@features/favoritelist";
import type { CurrentWeather } from "@entities/weather/model/types";

type WeatherState = {
    data?: CurrentWeather | null;
    isLoading: boolean;
    isError?: boolean;
};

type Props = {
    itemList: FavoriteItem[];
    onRemove: (key: string) => void;
    onRename: (key: string, alias: string) => void;
    onClick: (key: string) => void;
    weatherByKey?: Record<string, WeatherState>;
};

export const FavoriteListWidget = ({
    itemList,
    onRemove,
    onRename,
    onClick,
    weatherByKey,
}: Props) => {
    return (
        <div>
            <div className="font-semibold my-4">즐겨찾기</div>
            <FavoriteList
                itemList={itemList}
                onRemove={onRemove}
                onRename={onRename}
                onClick={onClick}
                weatherByKey={weatherByKey}
            />
        </div>
    );
};