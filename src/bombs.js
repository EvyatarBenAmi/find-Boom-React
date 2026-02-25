export function bombs() {
    const boms = []
    while(boms.length < 5){
        const bom = (Math.floor(Math.random() * 100) + 1)
        if(!boms.includes(bom)){
            boms.push(bom)
        }
    }
    // console.log(boms)    
    return boms
}