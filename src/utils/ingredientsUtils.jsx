/**
 * Formatta gli ingredienti ricevuti dall'API, e
 * ritorna un'array di oggetti con i vari nomi degli
 * ingredienti e le loro misure
 *
 * @param drink - il drink da cui estrarre gli ingredienti
 */


export const extractIngredients = (drink) => {
    if (!drink) return [];

    let ingredients = [];
    for (let i = 1; i <= 15; i++) {
        const name = drink[`strIngredient${i}`];
        const measure = drink[`strMeasure${i}`];

        if (name) {
            ingredients.push({
                name: name,
                measure: measure || ''
            });
        }
    }
    return ingredients;
};