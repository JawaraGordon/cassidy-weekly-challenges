// // Given a list of frequencies (in Hz), write a function to determine the closest musical note for each frequency based on the A440 pitch standard. Extra credit: indicate if the note is flat or sharp!
// // Example:
// // > getNoteNames([440, 490, 524, 293.66])
// // > ["This is a A", "This is a B, but it's flat", "This is a C, but it's sharp", "This is a D"]



hz = [17, 440, 490, 524, 293.66];
const getNoteNames = (hz) => {
// chromatic notes
  const noteNames = [
    'A',
    'A#/Bb',
    'B',
    'C',
    'C#/Db',
    'D',
    'D#/Eb',
    'E',
    'F',
    'F#/Gb',
    'G',
    'G#/Ab'
  ];
  //   converts each hertz frequency into a semitone index between 0 and 11
  return hz.map((frequency) => {
    // uses n = 12 * log2(f / 440) to find the distance from A4 (440hz) in semitones
    const semitoneDiff = Math.round(12 * Math.log2(frequency / 440));
console.log('semitoneDiff', semitoneDiff);
    // handles negative values to keep the index within a 0-11 range
    const noteIndex = ((semitoneDiff % 12) + 12) % 12;
    // saves the correct note from the noteNames array  
    let note = noteNames[noteIndex];

    return `This is ${frequency}hz which is the note ${note}`;
  });
};

result = getNoteNames(hz);
console.log(result);



// attempting to return the note accidental 😰
// hz = [50, 51, 51.91, 466.16, 440, 490, 524, 293.66, 3951.07, 739.99];
// // key = "F Major"
// // key = 'Eb Major';
// // key = "G Major"
// // key = "B Major"
// // key = "Bb Major"
// const getNoteNames = (hz) => {
// // chromatic notes
//   const noteNames = [
//     'A',
//     'A#/Bb',
//     'B',
//     'C',
//     'C#/Db',
//     'D',
//     'D#/Eb',
//     'E',
//     'F',
//     'F#/Gb',
//     'G',
//     'G#/Ab'
//   ];
//   const noteFrequenciesMap = {
//     C: [16.35, 32.7, 65.41, 130.81, 261.63, 523.25, 1046.5, 2093.0, 4186.01],
//     'C#': [
//       17.32, 34.65, 69.3, 138.59, 277.18, 554.37, 1108.73, 2217.46, 4434.92
//     ],
//     Db: [17.32, 34.65, 69.3, 138.59, 277.18, 554.37, 1108.73, 2217.46, 4434.92],
//     D: [18.35, 36.71, 73.42, 146.83, 293.66, 587.33, 1174.66, 2349.32, 4698.63],
//     'D#': [
//       19.45, 38.89, 77.78, 155.56, 311.13, 622.25, 1244.51, 2489.02, 4978.03
//     ],
//     Eb: [
//       19.45, 38.89, 77.78, 155.56, 311.13, 622.25, 1244.51, 2489.02, 4978.03
//     ],
//     E: [20.6, 41.2, 82.41, 164.81, 329.63, 659.25, 1318.51, 2637.02, 5274.04],
//     F: [21.83, 43.65, 87.31, 174.61, 349.23, 698.46, 1396.91, 2793.83, 5587.65],
//     'F#': [
//       23.12, 46.25, 92.5, 185.0, 369.99, 739.99, 1479.98, 2959.96, 5919.91
//     ],
//     Gb: [23.12, 46.25, 92.5, 185.0, 369.99, 739.99, 1479.98, 2959.96, 5919.91],
//     G: [24.5, 49.0, 98.0, 196.0, 392.0, 783.99, 1567.98, 3135.96, 6271.93],
//     'G#': [
//       25.96, 51.91, 103.83, 207.65, 415.3, 830.61, 1661.22, 3322.44, 6644.88
//     ],
//     Ab: [
//       25.96, 51.91, 103.83, 207.65, 415.3, 830.61, 1661.22, 3322.44, 6644.88
//     ],
//     A: [27.5, 55.0, 110.0, 220.0, 440.0, 880.0, 1760.0, 3520.0, 7040.0],
//     'A#': [
//       29.14, 58.27, 116.54, 233.08, 466.16, 932.33, 1864.66, 3729.31, 7458.62
//     ],
//     Bb: [
//       29.14, 58.27, 116.54, 233.08, 466.16, 932.33, 1864.66, 3729.31, 7458.62
//     ],
//     B: [30.87, 61.74, 123.47, 246.94, 493.88, 987.77, 1975.53, 3951.07, 7902.13]
//   };
//   const notes = {};

//   // Maps and trims the correct frequency to each note in the noteNames array starting with A 440
//   noteNames.forEach((note, i) => {
//     const freq = 440 * Math.pow(2, i / 12);
//     notes[note] = parseFloat(freq.toFixed(2));
//   });

// //   console.log('notes', notes);

//   //   Convert each hertz frequency into a semitone index between 0 and 11
//   return hz.map((frequency) => {
//     const semitoneDiff = Math.round(12 * Math.log2(frequency / 440));
//     const noteIndex = ((semitoneDiff % 12) + 12) % 12;
//     // holds the correct note from the chromatic array 
//     let mappedNote = noteNames[noteIndex];

//     // console.log('semitone', semitoneDiff);
//     // console.log('noteIndex', noteIndex);

//     // Check to see if the key is sharp or flat
//     let noteType;
//     for (const [note, freq] of Object.entries(noteFrequenciesMap)) {
//       const closest = freq.reduce((prev, curr) =>
//         Math.abs(curr - frequency) < Math.abs(prev - frequency) ? curr : prev
//       );
//       if (Math.abs(closest - frequency) < 1) {
//         noteType = note;
//       }
//     }

//     let note = mappedNote;
//     let noteVariant = 'natural';
//     if (mappedNote.includes('/')) {
//       const [sharpNote, flatNote] = mappedNote.split('/');
//       if (noteType === flatNote) {
//         note = flatNote;
//         noteVariant = 'flat';
//       } else if (noteType === sharpNote) {
//         note = sharpNote;
//         noteVariant = 'sharp';
//       } else {
//         note = sharpNote;
//         noteVariant = 'sharp';
//       }
//     }

//     //  Chooses the correct accidental or defaults to natural
//     const noteAccidental = noteNames[noteIndex].includes('/')
//       ? noteType
//       : 'natural';

//     return `This note is: ${note} (${noteVariant})`;
//   });
// };

// result = getNoteNames(hz);
// console.log(result);
