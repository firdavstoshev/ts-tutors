async function CatFacts() {
    const response = await fetch('https://catfact.ninja/fact');
    return await response.json()
}

CatFacts().then(res => console.log(res));