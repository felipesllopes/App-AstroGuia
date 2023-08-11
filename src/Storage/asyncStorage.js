const key = "@astroguia";

import AsyncStorage from '@react-native-async-storage/async-storage';


// show all rovers in the list
export async function getItem() {
    const value = await AsyncStorage.getItem(key);
    return JSON.parse(value) || []
}

// recognize which photo is favorite and return the bookmark icon or bookmark-outline
export async function isFavorite(rover) {
    let myFavorites = await getItem(key);
    let hasRover = myFavorites.some(item => item.id === rover.id)
    return hasRover;
}

// add rover to favorites
export async function addItem(rover) {
    let myFavorites = await getItem(key);
    myFavorites.push(rover);
    await AsyncStorage.setItem(key, JSON.stringify(myFavorites));
}

// remove rover to favorites
export async function rmvItem(id) {
    let myFavorites = await getItem(key);
    let newFavorites = myFavorites.filter(item => {
        return (item.id !== id)
    })
    await AsyncStorage.setItem(key, JSON.stringify(newFavorites));
}