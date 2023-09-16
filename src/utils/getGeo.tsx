export const getGeo = async () => {
  let ip
  let country
  await fetch('https://api.country.is')
    .then(response => response.json())
    .then(res => {
      country = res.country
      ip = res.ip
    })
  return { country, ip }
}
