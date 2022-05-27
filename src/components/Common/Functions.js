
// https://learnwithparam.com/blog/how-to-group-by-array-of-objects-using-a-key/
const groupBy = (array, key) => {
  const result = array.reduce((result, currentValue) => {
    // If an array already present for key, push it to the array. Else create an array and push the object
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );
    // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
    return result;
  }, {});
  // convert to array and return it
  return Object.entries(result);
};

export {groupBy}