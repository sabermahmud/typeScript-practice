/*
Day-7 Practice Problems
1. Gaming Age Rating
Function: getAgeRatingAccess(age: number): string
বয়স অনুযায়ী rating return করো:
< 7 → "E (Everyone)"
7–12 → "E10+ (Everyone 10+)"
13–16 → "T (Teen)"
17+ → "M (Mature)"
Test: 5, 7, 12, 13, 16, 17, 20
*/
const getAgeRatingAccess = (age:number):string => {
    if(age < 7){
        return "E (Everyone)"
    }
    else if(age <= 12){
        return "E10+ (Everyone 10+)"
    }
    else if(age <= 16){
        return "T (Teen)"
    }
    return "M (Mature)"
};
console.log(getAgeRatingAccess(21));

/*
2. WiFi Signal Status
Function: getSignalStatus(strength: number): string
Signal অনুযায়ী status:
0–20 → "Weak"
21–50 → "Fair"
51–80 → "Good"
81–100 → "Excellent"
Test: 20, 21, 50, 51, 80, 81
*/

/*
3. Esports Player Card
Player type/interface তৈরি করো:
username: string
level: number
region: string
Function: formatPlayerCard(player: Player): string
Expected:
"ShadowByte is a Level 42 player from Asia."
*/

/*
4. Total Listening Time
Track type তৈরি করো:
title: string
minutes: number
Function: calculateTotalListeningTime(tracks: Track[]): number
reduce() ব্যবহার করে total minutes বের করো।
Expected: [3,4,3] → 10
Edge case: [] → 0
*/

/*
5. Player Stats
Player:
name: string
scores: number[]
Function: getPlayerStats(player: Player)
বের করবে:
name
average
rank
Average >= 80 → "MVP"
Otherwise → "Rookie"
Expected: [90,85,95,80] → average: 87.5, rank: "MVP"
Edge case: scores: [] → average: 0, Rookie
*/

/*
6. Offline Mode Access
Tier union তৈরি করো:
"free" | "pro" | "premium"
Function: canAccessOfflineMode(tier: Tier): boolean
free → false
pro/premium → true
Expected: "student" দিলে TypeScript error
*/

/*
7. Menu Filter
MenuItem type:
name: string
price: number
tag: string
Function: findMenuItemsByTag(menu, tag)
filter() ব্যবহার করো।
Expected: "vegan" → matching items
Edge case: কোনো match না থাকলে → []
*/

/*
8. Notification Renderer
দুই ধরনের notification:
"like" → fromUser
"system" → message, optional actionUrl
Function: renderNotification(notification)
Expected:
Like → "Aisha liked your post."
System → "System: Maintenance complete."
actionUrl থাকলে → " (Tap to view)" যোগ হবে।
*/

/*
9. Storage Usage
দুই action:
upload + sizeMB
delete + sizeMB
Function: updateStorageUsage(currentUsageMB, action)
Upload → usage বাড়বে
Delete → usage কমবে
Important: usage কখনো 0-এর নিচে যাবে না।
Expected: 300 - 1000 → 0
*/

/*
10. EV Rental Fee
VehicleType:
"scooter" | "ebike" | "moped"
Function: calculateRentalFee(vehicle, minutes)
Formula:
Unlock Fee + (Minutes × Cost/Minute)
Scooter → 10 + 2/min
E-bike → 15 + 3/min
Moped → 25 + 5/min
Expected: scooter, 20 → 50
Edge case: 0 minutes হলেও unlock fee থাকবে।
"bike" দিলে TypeScript error।
*/
