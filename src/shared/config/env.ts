export const env = {
    openWeatherKey: import.meta.env.VITE_OPENWEATHER_KEY as string | undefined,
  };
  
  export function requireEnv(value: string | undefined, name: string): string {
    if (!value) throw new Error(`${name} 환경변수가 설정되지 않았습니다.`);
    return value;
  }