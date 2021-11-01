export const camalize = (str) => {
    return str.toLowerCase().replace(/(?:(^.)|(\s+.))/g, (match) => {
        return match.charAt(match.length-1).toUpperCase();
    })
}