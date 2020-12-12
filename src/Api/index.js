
const url = "https://covid19.mathdro.id/api";

export const fetchGlobalData = async ()=> 
{
    const apiResponse = await fetch(url);
    const dataFromApi = await apiResponse.json();
    console.log("fetch from api==>",dataFromApi);
    return dataFromApi;
}