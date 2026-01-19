import type { Place } from "@entities/place/model/types";

export type FavoriteItem = {
    key: string;
    label: string;
    alias: string;
    createdAt: number;
}

const STORAGE_KEY = "favoriteList.v1";

// 즐겨찾기 목록 로드
export function loadFavoriteList(): FavoriteItem[] {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    try {
        return JSON.parse(raw) as FavoriteItem[];
    } catch (error) {
        return [];
    }
}

// 즐겨찾기 목록 저장
export function saveFavoriteList(list: FavoriteItem[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

// 장소 -> 즐겨찾기 항목 변환
export function toFavorite(place: Place): FavoriteItem {
    return {
        key: place.key,
        label: place.label,
        alias: place.label,
        createdAt: Date.now(),
    }
}