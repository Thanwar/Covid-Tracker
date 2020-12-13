
const url = "https://covid19.mathdro.id/api";



export const fetchGlobalData = async (country)=> 
{
    let dynamicUrl= url;
    if(country)
    {
        dynamicUrl = `${url}/countries/${country}`
    }
    const apiResponse = await fetch(dynamicUrl);
    const dataFromApi = await apiResponse.json();
    // console.log("fetch from api==>",dataFromApi);
    return dataFromApi;
}


export const fetchDailyData = async ()=> 
{
    const apiResponse = await fetch(`${url}/daily`);
    const dataFromApi = await apiResponse.json();
    const ModifiedData = dataFromApi.map((dailyData)=>({
        confirmed: dailyData.confirmed.total,
        deaths: dailyData.deaths.total,
        date: dailyData.reportDate,

    }))
    //console.log("fetch Daily from api==>",dataFromApi);
    //console.log("Modified Daily from api==>",ModifiedData);
    return ModifiedData;
}


export const fetchCountries = async ()=> 
{
    const apiResponse = await fetch(`${url}/countries`);
    const dataFromApi = await apiResponse.json();
    const ModifiedData = dataFromApi.countries.map((country)=>country.name)
    //console.log("fetch Countries from api==>",ModifiedData);
    return ModifiedData;
}


