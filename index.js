
function takeANumber(peopleInLine, newName){

peopleInLine.push(newName);
  
return (`Welcome, ${newName}. You are number ${peopleInLine.length} in line.`);
}


function nowServing(peopleInLine){
  
  if (peopleInLine.length === 0){
    return "There is nobody waiting to be served!";
  }else{
  
  return `Currently serving ${peopleInLine.shift()}.`;
  
  }
  }
  
  
  function currentLine(peopleInLine){
  if(!peopleInLine.length){
    return 'The line is currently empty.';
  }else{
   
    var array=[];
    for(let i = 0; i< peopleInLine.length; i++){
    
    array.push(`${i+1}. ${peopleInLine[i]}`);
    
      }
    
    return `The line is currently: ${array.join(', ')}`;
    
  }
  }
  