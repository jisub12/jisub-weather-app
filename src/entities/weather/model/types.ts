export type LatLon = { lat: number; lon: number }; // 위도, 경도

// 현재 날씨
export type CurrentWeather = {
  name: string;            // 장소명
  temp: number;            // 현재
  tempMin: number;         // 당일 최저(현재 API 기준)
  tempMax: number;         // 당일 최고(현재 API 기준)
  icon: string;            // 아이콘 코드
  description: string;     // 날씨 설명(kr)
};

// 3시간 단위 기온 예보 아이템
export type Hourly3hForecastItem = {
  dt: number;              // unix(sec)
  temp: number;            // 해당 시각 기온
};

// 3시간 단위 기온 예보
export type Forecast3h = {
  itemList: Hourly3hForecastItem[]; // 3시간 단위 리스트
};