console.log("hello from dsalgopractice")


const waterTable = [0,1,0,2,1,0,3,1,0,1,2]

function trappingRainWater(heights) {
  let left = 0,
    right = heights.length - 1,
    total = 0,
    maxLeft = 0,
    maxRight = 0

    while (left < right) {
      if(heights[left] <= heights[right]) {
        if (heights[left] >= maxLeft) {
          maxLeft = heights[left]
        } else {
          total += maxLeft - heights[left];
        }
        left++;
      } else {
        if(heights[right] >= maxRight) {
          maxRight = heights[right]
        } else {
          total += maxRight - heights[right]
        }
          right--;
        }
      }
      return total
    }

    /*
      1) Identify a pointer with the lesser value
      2) Is this pointer value greater than or equal to max on the same side
      3) If the answer is YES, then update the max on that side
      4) If NOT get get the water for the pointer and add to total
      5) Move pointer inwards
      6) Repeat for other pointer


    */

   console.log("trapping rainwater result", trappingRainWater(waterTable))


   // also... here's a recursive two num sum

const nums = [1,6,2,9,20,50,100,500]

function recursiveTwoNum(t, a, i) {
  let targetNum = t - a[i]
  if (a.indexOf(targetNum) != -1 ) {
    return [a[i], a[a.indexOf(targetNum)]]
  } else if (a.indexOf(targetNum) == -1 && i == a.length - 1 ) {
    return ["no match"]
  } else {
    return recursiveTwoNum(t, nums, i+= 1)
  } 
}

console.log("two num sum recursive solution without sort", recursiveTwoNum(550, nums, 0))

// string problem below...

let strang = "abe#c#" 
let strang2 = "abc#" 

const buildString = function(string) {
  const builtArray = [];
  for (let p = 0; p < string.length; p++) {
    if (string[p] !== "#") {
      builtArray.push(string[p])
    } else {
      builtArray.pop()
    }
  }
  return builtArray; 
}

const compareStrings = function(s,t){
  const finalS = buildString(s);
  const finalT = buildString(t);

  if (finalS.length !== finalT.length) {
    return false
  } else {
    for (let p = 0; p < finalS.length; p++) {
      if (finalS[p] !== finalT[p]) {
        return false
      }
    }
  }
  return true;
}

console.log("string compare", compareStrings(strang, strang2))

// OPTIMIZED COMPARE STRINGS

const string1 = "eabz###"
const string2 = "eaz#z##"

var backspaceCompare = function(S, T) {
    let p1 = S.length - 1, p2 = T.length - 1;
    
    while(p1 >= 0 || p2 >= 0) {
        if(S[p1] === "#" || T[p2] === "#") {
            if(S[p1] === "#") {
                let backCount = 2;
                
                while(backCount > 0) {
                    p1--;
                    backCount--;
                    
                    if(S[p1] === "#") {
                        backCount += 2;
                    }
                }
            }
            
            if(T[p2] === "#") {
                let backCount = 2;
                
                while(backCount > 0) {
                    p2--;
                    backCount--;
                    
                    if(T[p2] === "#") {
                        backCount += 2;
                    }
                }
            }
        } else {
            if(S[p1] !== T[p2]) {
                return false;
            } else {
                p1--;
                p2--;
            }
        }
    }
    
    return true;
};

console.log("optimized", backspaceCompare(string1, string2));