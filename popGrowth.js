// Pop Growth Challenge

// Pop beginning year p0=1000
// Pop increases by 2% per year
// 50 new inhabitants come to live in town 
// How many years to see pop greater than p=1200

// First year Pop: 1000 + (1000*.02) + 50 = 1070
// Second year Pop: 1070 + (1070*.02) +50 = 1141
// Third year Pop: 1141 (1141*.02) + 50 = 1213

// Parameters: (p0 (1000)), (percent (.02)), (aug (influx of inhabitants)), (p (pop to surpass))
// function (nbYear) should return (n)number of yeears needed for pop to >=1200
                    // My Attempt
// const nbYear = (p0, percent, aug, p) => {
//      let nFlux = p - (p0 + (p0 * percent) + aug)
//      return nFlux
//     //  let n = p - nFlux
//     //  return n
// }
// console.log(nbYear(1141, .02, 50, 1213))
//console.log(nbYear(1500, 5, 100, 5000))

                    // solution 
function nbYear(p0, percent, aug, p) {
    for (var y = 0; p0 < p; y++) {            // loop because we are trying to find the year ('y'), p0 > p (p0 beginning pop is less than desired pop (p)) y++ increments the year 
        p0 = p0 * ( percent / 100) + aug; // formula fromm instructions, what is going on in () why is 1 added to divided percent ?
    }
    return y;
  }
  console.log(nbYear(1000, 2, 50, 1213))







//nbYear(1500, 5, 100, 5000)