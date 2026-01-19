// 행정구역 데이터리스트 가져오기
export async function getDistrictList() : Promise<string[]> {
    const res = await fetch("/korea_districts.json");
    if (!res.ok) throw new Error("행정구역 데이터를 불러오지 못했습니다.")
    return res.json();
}