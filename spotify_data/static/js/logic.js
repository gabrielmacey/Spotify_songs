console.log(artists);

// Append to make id strings
d3.json(query).then((data)=>{
  var string = data.Artists;
  console.log(string);
});
