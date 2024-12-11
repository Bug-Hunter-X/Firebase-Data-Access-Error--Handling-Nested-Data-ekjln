function handleData(snapshot) {
  if (snapshot.exists()) {
    const data = snapshot.val();
    // Accessing nested data without checking for null or undefined
    const nestedValue = data.nested.property; // Error prone if 'nested' or 'property' is missing 
    console.log(nestedValue); 
  } else {
    console.log('No data available');
  }
}