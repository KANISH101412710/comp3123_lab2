

const capitalize = ([first, ...rest]) => {
    return first.toUpperCase() + rest.join('');
  };
  
  console.log(capitalize('fooBar')); // FooBar
  console.log(capitalize('nodeJs')); // NodeJs
  