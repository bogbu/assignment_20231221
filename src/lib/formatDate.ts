export const formatDate = (date : Date) => {
    let newDate = new Date(date)
    return newDate.toISOString().split('T')[0];
}