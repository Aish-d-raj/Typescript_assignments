function max(x, y, z) 
 {
  max_val = 0;
  if (x > y)
  {
    max_val = x;
  } else
  {
    max_val = y;
  }
  if (z > max_val) 
  {
    max_val = z;
  }
  return max_val;
}

console.log(max(1,0,8));

console.log(max(400,6,2000));


// OR

var x =5;

var y =9;

var z =4;

console.log(Math.max(x,y,z))