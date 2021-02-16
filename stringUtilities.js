const input=document.querySelector('#input');
const output=document.querySelector('#output');
const words=document.querySelector('#words');
const characters=document.querySelector('#alpha');
const spaces=document.querySelector('#spaces');
const paragraphs=document.querySelector('#paragraphs');
const lowerButton=document.querySelector('#lower-button');
const upperButton=document.querySelector('#upper-button');
const resetButton=document.querySelector('#reset-button');

resetButton.addEventListener('click',()=>{
  output.value = "";
  input.value = "";
  words.innerHTML=0;
  characters.innerHTML=0;
  spaces.innerHTML=0;
  paragraphs.innerHTML=0;

});


function spaceCount(x)
{
  let ct=0;
  for(let i=0;i<x.length;i++)
  {
    if(x[i]===' ')
    ct++;
  }
  return ct;
}

function wordCount(x)
{
  let ct=0;
  for(let i=0;i<x.length;i++)
  {
    if(x[0]!==' ' && x[i]===' ')
    ct++;
  }
  return ct+1;
}

function letterCount(x)
{
  let ct=0;
  for(let i=0;i<x.length;i++)
  {
    if( (x[i]>='0' && x[i]<='9') || (x[i]>='a' && x[i]<='z') || (x[i]>='A' && x[i]<='Z'))
    ct++;
  }
  return ct;
}

function paraCount(x)
{
  let ct=0;
  for(let i=0;i<x.length;i++)
  {
    if(x[0]!==' ' && x[0]!=='\n' && x[i]==='\n')
    ct++;
  }
  return ct+1;
}


input.addEventListener('input',()=>{
  spaces.innerHTML=spaceCount(input.value);
  words.innerHTML=wordCount(input.value);
  alpha.innerHTML=letterCount(input.value);
  paragraphs.innerHTML=paraCount(input.value);
});

input.addEventListener('keydown',()=>{

  if(spaces.innerHTML>0) spaces.innerHTML--;
  if(words.innerHTML>0) words.innerHTML--;
  if(alpha.innerHTML>0) alpha.innerHTML--;
  if(paragraphs.innerHTML>0) paragraphs.innerHTML--;
});

lowerButton.addEventListener('click',()=>{
  output.value=(input.value).toLowerCase();
});

upperButton.addEventListener('click',()=>{
  output.value=(input.value).toUpperCase();
});
