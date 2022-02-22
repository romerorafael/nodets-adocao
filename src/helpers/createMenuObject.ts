type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish';

export const createMenuObjects = (activeMenu : MenuOptions) =>{
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    };

    if(activeMenu !== ''){
        returnObject[activeMenu] = true;
    }

    return returnObject;

}