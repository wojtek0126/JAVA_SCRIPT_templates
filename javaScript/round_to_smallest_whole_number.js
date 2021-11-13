function litres(time) {
    let hour = time;
    const perHour = 0.5;
    return Math.floor(time * perHour);
}