function produceDrivingRange (drivingRange) {
  return function (startBlock, endBlock) {
    const start = parseInt(startBlock);
    const end = parseInt(endBlock);
    const distance = end - start;

    if (distance <= range) {
      return `within range by ${distance % range}`;
    } else {
      return `${distance % range} blocks out of range`;
    }
  };
}

function produceTipCalculator (percent) {
  return function (tip) {
    return tip * percent;
  };
}

function createDriver () {
  let itemId = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++itemId;
    }
  };
}
