import type { Place } from "@entities/place/model/types";
import type { CurrentWeather } from "@entities/weather/model/types";
import { PlaceSearch } from "@features/placesearch";
import { CurrentWeatherCard } from "@shared/ui/CurrentWeatherCard";

type Props = {
    selected: Place | null;
    onSelect: (place: Place | null) => void;
    onAddFavorite: (place: Place) => void;
    addError?: string | null;
    current?: CurrentWeather;
};

export const CurrentLocationWidget = ({
    selected,
    onSelect,
    onAddFavorite,
    addError,
    current,
}: Props) => {
    return (
        <div className="space-y-4">
            <PlaceSearch onSelect={onSelect} />

            {/* 선택한 장소 */}
            {selected && (
                <div className="rounded-xl border p-4 space-y-1">
                    <div className="font-semibold text-xl">선택한 장소</div>
                    <div className="text-My_Yellow">{selected.label}</div>
                    <button className=" text-My_White border border-My_Mint p-1 rounded-md hover:bg-My_Mint hover:text-My_Black"
                        onClick={() => {
                            onAddFavorite(selected);
                            onSelect(null);
                        }}
                    >
                        즐겨찾기 추가
                    </button>
                    {addError && <div className="text-xs text-My_Red">{addError}</div>}
                </div>
            )}

            {/* 현재 날씨 */}
            {current && (
                <CurrentWeatherCard title={current.name} current={current} />
            )}
        </div>
    );
};