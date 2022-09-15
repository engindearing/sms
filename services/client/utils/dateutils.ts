export const formatDateMMDDYYYY = (date) => {
    date = new Date(date)
    return  ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear()
}

export const formatTime12Hour = (date) => {
    date = new Date(date)
    return date.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})
}