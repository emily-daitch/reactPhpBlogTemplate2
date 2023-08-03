import { SummaryActivity } from '../../types/strava';

const env = process.env.STAGE;
const url = process.env.URL;
const certed = process.env.CERTED;
const protocol = certed === 'false' ? 'http' : 'https';

export const getActivities = async ():Promise<[SummaryActivity]> => {
    const activities = await fetch(`${protocol}://${env}${url}/api/getStravaActivities`);
    const data = await activities.json();
    console.log('data: ', data);
    return data;
}; 

export const getMapActivity = async ():Promise<SummaryActivity> => {
    const activities = await fetch(`${protocol}://${env}${url}/api/getMapActivity`);
    const data = await activities.json();
    console.log('map data: ', data);
    return data;
};