const url = '/api/'

const Patch = async (url : string, body : object) => {
    const res = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    return await res.json();
}

const patchMethod = {
    tokenId: (id : number, body : object) => {
        let uri = url + 'tokens/' + id;
        return Patch(uri, body);
    }
}

export default patchMethod;