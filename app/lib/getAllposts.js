

export default async function getAllPosts(){
    const result = await fetch(' https://api.sheetbest.com/sheets/f61c7918-79c7-40d9-9b7b-29b92d10880c');

    return result.json();
}