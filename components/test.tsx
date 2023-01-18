export const formatDateString = (dateNum: number) => {
    switch (dateNum) {
        case 1:
            return "Sun";
        case 2:
            return "Mon";
        case 3:
            return "Tue";
        case 4:
            return "Wed";
        case 5:
            return "Thu";
        case 6:
            return "Fri";
        case 7:
            return "Sat";
        case 8:
            return "PH";
        default:
    }
}