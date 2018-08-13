const addToList = item => {
    console.log(item)
    return {
      type: "ADD_TO_LIST",
      item
    };
  };
  
  export { addToList }