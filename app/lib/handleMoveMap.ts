

export const getCurrentDirection = async (location: string) => {
    const response = await fetch(`http://localhost:3000/api/map/${location}`)
    const data = await response.json()
    return data.directions
}