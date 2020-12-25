const cut = (string) => {
  return string
    .toLowerCase()
    .replace(/\s/g, "-")
    .replace(/\?/g, "")
    .replace(/\//g, "")
}

const getFileName = (artist, album) => {
  return "/albums/" + cut(artist) + "·" + cut(album) + ".jpg"
}

export default getFileName
