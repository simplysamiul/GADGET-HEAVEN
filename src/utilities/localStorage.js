import { toast } from "react-toastify";



// get card and wish list id that is added inside of the localstorage 
const getItems = (cartType) => {
    let storedItems;
    if (cartType === "cart") {
        storedItems = localStorage.getItem("cart");
    } else if (cartType === "wish") {
        storedItems = localStorage.getItem("wish");
    }
    if (storedItems) {
        const itemsArry = JSON.parse(storedItems);
        return itemsArry
    }
    return [];
};

// wish and card list id added in the local storage
const addItem = (id, cartType) => {
    const storedItem = getItems(cartType);
    const includeItem = storedItem.includes(id);

    if (!includeItem) {
        const mainItemsArray = [...storedItem, id];
        const itmsStringiFy = JSON.stringify(mainItemsArray);
        localStorage.setItem(cartType, itmsStringiFy);
        toast.success(`Product added in the ${cartType} list`)
    } else {
        toast.error("Items alredy added")
    }
};

// emove card and wish list data from localstorage
const deleteItem = (cartType, id) => {
    const storedItem = getItems(cartType);
    let dataStringify;
    if (cartType === "cart") {
        const filtereData = storedItem.filter(item => item !== id);
        dataStringify = JSON.stringify(filtereData);
        localStorage.setItem(cartType, dataStringify);
        toast.success("Items delete successfully ..!")
    }
    else if (cartType === "wish") {
        const filtereData = storedItem.filter(item => item !== id);
        dataStringify = JSON.stringify(filtereData);
        localStorage.setItem(cartType, dataStringify);
        toast.success("Items delete successfully ..!")
    }
}

export { addItem, getItems, deleteItem };