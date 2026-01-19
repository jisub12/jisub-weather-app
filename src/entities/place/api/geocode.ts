import { http } from "@shared/api/http";
import { env, requireEnv } from "@shared/config/env";
import type { LatLon } from "@entities/weather/model/types";
import type { Place } from "@entities/place/model/types";

const KEY = () => requireEnv(env.openWeatherKey, "VITE_OPENWEATHER_KEY");

export async function geocodePlace(place: Place): Promise<LatLon | null> {
  const queries = [
    place.partList.join(" "),
    place.partList.slice(0, 2).join(" "),
    place.partList.slice(0, 1).join(" "),
  ].filter(Boolean);

  for (const q of queries) {
    const res = await http.get("/geo/1.0/direct", {
      params: { q: `${q},KR`, limit: 1, appid: KEY() },
    });

    const data = res.data as LatLon[];
    if (data && data.length > 0) {
      return { lat: data[0].lat, lon: data[0].lon };
    }
  }

  return null;
}