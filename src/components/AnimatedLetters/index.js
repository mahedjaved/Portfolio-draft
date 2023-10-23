/**
 * @desc: purpose of this class is to have letters in the main page pop out seperately. This function takes an array of letters as inputs and outputs animated letters
 * @output: [Array type] an array of animated letters
 */

import './index.scss'
const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    // span since it is inline element
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
