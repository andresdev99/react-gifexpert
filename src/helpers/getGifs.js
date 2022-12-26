export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=YIskz20eVl44EuU5dx88T38SF2ElEL1S&q=${category}&limit=10`;
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map(({ id, title, images: { downsized_medium: { url } } }) => ({
        id: id,
        title: title,
        url: url
    }))
    return gifs;
}