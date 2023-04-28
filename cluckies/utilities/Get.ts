const url = '/api/'

const Get = async (url:string) => {
    const res = await fetch(url);
    return await res.json();
}

const getMethod = {
    allTokens: () => {
        let uri = url + 'tokens';
        return Get(uri);
    },
    tokenId: (id:string) => {
        let uri = url + 'tokens/' + id;
        return Get(uri);
    }
}

export default getMethod;