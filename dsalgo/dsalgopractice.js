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