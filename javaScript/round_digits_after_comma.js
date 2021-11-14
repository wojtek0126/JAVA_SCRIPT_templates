function usdcny(usd) {
    const conversion = ((usd * 0.675) * 10).toFixed(2) // toFixed(number) rounds to desired digits after comma
    return `${conversion} Chinese Yuan`
}