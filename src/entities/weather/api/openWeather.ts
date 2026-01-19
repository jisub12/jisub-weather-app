import { http } from "@shared/api/http";
import { env, requireEnv } from "@shared/config/env";
import type { CurrentWeather, Forecast3h, LatLon } from "../model/types";

const KEY = () => requireEnv(env.openWeatherKey, "VITE_OPENWEATHER_KEY");

export async function fetchCurrentWeather({ lat, lon }: LatLon): Promise<CurrentWeather> {
  const res = await http.get("/data/2.5/weather", {
    params: { lat, lon, appid: KEY(), units: "metric", lang: "kr" },
  });

  const data = res.data as any;

  return {
    name: data?.name ?? "",
    temp: Number(data?.main?.temp),
    tempMin: Number(data?.main?.temp_min),
    tempMax: Number(data?.main?.temp_max),
    icon: String(data?.weather?.[0]?.icon ?? ""),
    description: String(data?.weather?.[0]?.description ?? ""),
  };
}

export async function fetchForecast3h({ lat, lon }: LatLon): Promise<Forecast3h> {
  const res = await http.get("/data/2.5/forecast", {
    params: { lat, lon, appid: KEY(), units: "metric", lang: "kr" },
  });

  const data = res.data as any;

  const itemList = (data?.list ?? []).map((it: any) => ({
    dt: Number(it?.dt),
    temp: Number(it?.main?.temp),
  }));

  return { itemList };
}