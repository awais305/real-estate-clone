function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function capitalizeFirstLetterOfEachWord(string) {
    return string.replace(/\b[a-z]/g, function (char) {
        return char.toUpperCase();
    });
}

const formatTimeAmPm = (dateString) => {
    const date = new Date(dateString);
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${formattedHours}:${formattedMinutes} ${ampm}`;
}

export { capitalizeFirstLetter, capitalizeFirstLetterOfEachWord, formatTimeAmPm };