
const capitalize = ([first, ...rest]) => {
    return first.toUpperCase() + rest.join('');
  };
  
  const colors = ['red', 'green', 'blue'];
  
  const capitalizedColors = colors.map(color => capitalize(color));
  
  console.log(capitalizedColors); 
  