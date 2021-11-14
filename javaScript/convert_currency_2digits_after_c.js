function usdcny(usd) {
    const conversion = ((usd * 0.675) * 10).toFixed(2)
    return `${conversion} Chinese Yuan`
}