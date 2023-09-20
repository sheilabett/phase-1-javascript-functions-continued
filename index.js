// code your solution here
//sheila

function saturdayFun(activity) {
    if (activity === undefined) {
      activity = "roller-skate"; 
    }
    return `This Saturday, I want to ${activity}!`;
  }
  console.log(saturdayFun()); 
  console.log(saturdayFun("play soccer")); 

  function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  }
  function wrapAdjective(flair = "*") {
    return function (adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction()); 
  console.log(encouragingPromptFunction("amazing")); 