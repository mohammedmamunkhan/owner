

export default async function getAlldata(){
    
     const res = await fetch('https://api.sheetbest.com/sheets/df6e8725-161b-4de8-a130-6310bfb38b3d');

    return res.json()
}