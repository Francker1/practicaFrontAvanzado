const lStorage = {
    setItem: (key, value) => localStorage.setItem(key, value),
    getItem: (key) => localStorage.getItem(key),
};

const cookieStorage = {
    setItem: (key, value) => Cookies.set(key, value),
    getItem: (key) => Cookies.get(key)
};

/*por defecto esta funcionalidad tiene tipo localStorage*/

const storage = (type = 'lStorage') => {

    const types = {
        lStorage,
        cookieStorage
    };

    if(typeof(Storage) !== 'undefined'){
        return types[type];
    }else{
        return type['cookieStorage'];
    }
};

export default storage;