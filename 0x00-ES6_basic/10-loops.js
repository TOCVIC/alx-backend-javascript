export default function appendToEachArrayValue(array, appendString) {
    for (var idx in array) {
      var value = array[idx];
      array[idx] = appendString + value;
    }
  
    return array;
  }
  
//export default function appendToEachArrayValue(array, appendString) {
    //const newArray = [];
    //for (const idx of array) {
	//newArray.push(appendString + value);
    //}

    //return newArray;
//}
