function handleData(snapshot) {
  if (snapshot.exists()) {
    const data = snapshot.val();
    //Check if nested exists before accessing it
    if (data.nested && data.nested.property) {
      const nestedValue = data.nested.property; 
      console.log(nestedValue);
    } else {
      console.log('Nested property not found');
    } 
  } else {
    console.log('No data available');
  }
}