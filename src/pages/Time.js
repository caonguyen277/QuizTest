

  let time = { hr: 0, min: 0, sec: 0, ms: 0 };
  let updatedHr = time.hr,
    updatedMin = time.min,
    updatedSec = time.sec,
    updatedMs = time.ms;
  const run = () => {
    if (updatedMin === 60) {
      updatedHr++;
      updatedMin = 0;
    }
    if (updatedSec === 60) {
      updatedMin++;
      updatedSec = 0;
    }
    if (updatedMs === 100) {
      updatedSec++;
      updatedMs = 0;
    }
    updatedMs++;
    time = {
      ms: updatedMs,
      sec: updatedSec,
      Min: updatedMin,
      Hr: updatedHr,
    };
    console.log(time);
  };
  let interval;
  const startTimer = (state) => {
    // run();
    if(state === true)
    interval = setInterval(run, 10);
    if(state === false){
      clearInterval(interval)
      const finishTime = time;
      time = { hr: 0, min: 0, sec: 0, ms: 0 };
      return finishTime;
    }
    
  };
export default startTimer;