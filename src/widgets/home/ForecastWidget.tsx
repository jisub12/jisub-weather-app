import type { Hourly3hForecastItem } from "@entities/weather/model/types";
import { ForecastGrid } from "@shared/ui";

type Props = {
    itemList: Hourly3hForecastItem[];
};

export const ForecastWidget = ({ itemList }: Props) => {
    return (
        <div className="rounded-xl border p-4">
            <div className="font-semibold mb-2">시간 단위 기온</div>
            <ForecastGrid itemList={itemList} />
        </div>
    );
};