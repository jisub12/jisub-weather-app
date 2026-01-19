import { useState } from "react";
import type { FavoriteItem } from "../model/storage"
import type { CurrentWeather } from "@entities/weather/model/types";

type WeatherState = {
    data?: CurrentWeather | null;
    isLoading: boolean;
    isError?: boolean;
}

type Props = {
    item: FavoriteItem;
    onRemove: (key: string) => void;
    onRename: (key: string, alias: string) => void;
    onClick: (key: string) => void;
    weatherState?: WeatherState;
};

export const FavoriteCard = ({ item, onRemove, onRename, onClick, weatherState }: Props) => {
    const [editing, setEditing] = useState(false);
    const [alias, setAlias] = useState(item.alias);

    const weather = weatherState?.data;

    return (
        <div
            className="grid grid-cols-2 gap-4 rounded-xl border border-My_Line bg-My_Dark1 p-4 text-My_White shadow-sm hover:bg-My_Gray1 transition-colors cursor-pointer"
            onClick={() => onClick(item.key)}
        >
            <div className="text-base font-semibold text-My_White">{item.label}</div>

            {/* 별칭 수정 */}
            {editing ? (
                <div>
                    <input
                        className="w-full rounded-lg border border-My_Line bg-My_Dark2 px-3 py-2 text-sm text-My_White placeholder:text-My_Gray2 focus:outline-none focus:ring-2 focus:ring-My_PointB"
                        value={alias}
                        onChange={(e) => setAlias(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        onFocus={(e) => e.stopPropagation()}
                    />
                    <button
                        className="rounded-lg bg-My_PointB px-3 py-2 text-sm font-medium text-My_Black hover:opacity-90"
                        onClick={(e) => {
                            e.stopPropagation();
                            onRename(item.key, alias.trim() || item.label);
                            setEditing(false);
                        }}
                    >
                        <p className="text-sm text-My_Red">저장</p>
                    </button>
                </div>
            ) : (
                <div className="text-sm text-My_Yellow">{item.alias}</div>
            )}

            {/* 날씨 */}
            <div>
                {weatherState?.isLoading && <div className="text-My_Gray2">날씨 불러오는 중...</div>}
                {weatherState?.isError && <div className="text-My_Red">날씨 불러오기 실패</div>}
                {!weatherState?.isLoading && !weatherState?.isError && weather === null && (
                    <div className="text-My_Gray1">해당 장소의 정보가 제공되지 않습니다.</div>
                )}
                {weather && (
                    <div className="text-My_Mint">
                        <div className="text-My_Red">현재 {Math.round(weather.temp)}°</div>
                        <div>
                            최저 {Math.round(weather.tempMin)}°
                        </div>
                        <div>
                            최고 {Math.round(weather.tempMax)}°
                        </div>
                    </div>
                )}
            </div>

            {/* 버튼 */}
            <div>
                <button
                    className="rounded-lg border border-My_Line px-3 py-2 text-sm text-My_White hover:bg-My_Mint hover:text-My_Black"
                    onClick={(e) => {
                        e.stopPropagation();
                        setEditing(true);
                    }}>
                    별칭수정
                </button>
                <button
                    className="rounded-lg bg-My_Dark1 px-3 py-2 text-sm font-medium text-My_Blue hover:opacity-90"
                    onClick={(e) => {
                        e.stopPropagation();
                        if (window.confirm("정말 삭제하시겠습니까?")) {
                            onRemove(item.key);
                        }
                    }}>
                    삭제
                </button>
            </div>
        </div>
    );
};