export async function requestApi(query) {
    const key = 'c23bd4c3';

    try {
        const res = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${key}`)
        if (!res.ok) {
            throw new Error("Movie not found" + res.status);}
       
        const data = await res.json();
        if (data.Response === "False") {
            throw new Error(data.Error);
        }
        return data;

    } catch (error) {
        console.log('Something is wrong', error);
        return { Error: error.message };
        
    }

}

