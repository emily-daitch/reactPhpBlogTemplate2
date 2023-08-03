import { SummaryActivity } from '../../types/strava';

export const getActivities = async ():Promise<[SummaryActivity]> => {
    const activities = await fetch('http://localhost/reactPhpBlogTemplate2/api/getStravaActivities');
    const data = await activities.json();
    console.log('data: ', data);
    return data;
}; 

export const getMapActivity = async ():Promise<SummaryActivity> => {
    const activities = await fetch('http://localhost/reactPhpBlogTemplate2/api/getMapActivity');
    const data = await activities.json();
    console.log('map data: ', data);
    return data;
};