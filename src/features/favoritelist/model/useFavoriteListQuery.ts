import { useEffect, useState } from "react";
import { loadFavoriteList, saveFavoriteList, toFavorite, type FavoriteItem } from "./storage";
import type { Place } from "@entities/place/model/types";

const MAX_FAVORITE_LIST = 6;

export function useFavoriteList() {
    const [itemList, setItemList] = useState<FavoriteItem[]>(() => loadFavoriteList());
    const [error, setError] = useState<string | null>(null);

    // 즐겨찾기 목록 로드
    useEffect(() => {
        setItemList(loadFavoriteList());
    }, []);

    // 즐겨찾기 목록 저장
    useEffect(() => {
        saveFavoriteList(itemList);
    }, [itemList]);

    // 즐겨찾기 추가
    const add = (place: Place) => {
        setError(null);
        if (itemList.find((i) => i.key === place.key)) {
            setError("이미 즐겨찾기에 추가된 장소입니다.");
            return;
        }
        if (itemList.length >= MAX_FAVORITE_LIST) {
            setError("즐겨찾기는 최대 6개까지 추가할 수 있습니다");
            return;
        }
        setItemList([toFavorite(place), ...itemList]);
    };

    const remove = (key: string) => {
        setItemList(itemList.filter((i) => i.key !== key));
    };

    const rename = (key: string, alias: string) => {
        setItemList(itemList.map((i) => (i.key === key ? { ...i, alias } : i)));
    };

    return { itemList, add, remove, rename, error };
}