// Code your solution in this file!

function distanceFromHqInBlocks(blocks) {
    const hq = 42;
    return Math.abs(blocks - hq);
}

function distanceFromHqInFeet(blocks) {
    const blockInFeet = 264;
    return distanceFromHqInBlocks(blocks) * blockInFeet;
}

function distanceTravelledInFeet(start, end) {
    const blockInFeet = 264;
    const distanceInBlocks = Math.abs(end - start);
    return distanceInBlocks * blockInFeet;
}

function calculatesFarePrice(start, end) {
    const distanceInFeet = distanceTravelledInFeet(start, end);
    let farePrice = 0;
  
    if (distanceInFeet <= 400) {
      return farePrice;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      farePrice = (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      farePrice = 25;
    } else {
      return 'cannot travel that far';
    }
  
    return farePrice;
  }
  
