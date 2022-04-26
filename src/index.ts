import { action } from "./user-activity";
export const startTracking = () => {
var userActivity = action.getUserActivity();
return userActivity;
};