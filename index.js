function shout(string){
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(shout)
}

function logWhisper (string) {
  console.log(whisper)
}

function sayHiToGrandma (string) {
  if (string === whisper){
    return "I can't hear you!"
  }
  else if (string === shout) {
    return "YES INDEED!"
  }
  else if (string === "I love you, Grandma."){
  return "I love you, too."
}
else {
  return
}
}
