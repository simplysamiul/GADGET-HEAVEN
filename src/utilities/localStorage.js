import { toast } from "react-toastify";

const getItems = (cartType) =>{
    let storedItems ;
    if(cartType === "cart"){
        storedItems = localStorage.getItem("cart");
    }else if(cartType === "wish"){
        storedItems = localStorage.getItem("wish");
    }
    if(storedItems){
        const itemsArry = JSON.parse(storedItems);
        return itemsArry
    }
    return [];
};

const addItem = (id, cartType) =>{
    const storedItem = getItems(cartType);
    const includeItem = storedItem.includes(id);

    if(!includeItem){
        const mainItemsArray = [...storedItem, id];
        const itmsStringiFy = JSON.stringify(mainItemsArray);
        localStorage.setItem(cartType, itmsStringiFy);
        toast.success(`Product added in the ${cartType} list`)
    }else{
        toast.error("Items alredy added")
    }
}

export {addItem, getItems};