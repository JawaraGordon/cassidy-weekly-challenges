// Given a list of frequencies (in Hz), write a function to determine the closest musical note for each frequency based on the A440 pitch standard. Extra credit: indicate if the note is flat or sharp!
// Example:
// > getNoteNames([440, 490, 524, 293.66])
// > ["This is a A", "This is a B, but it's flat", "This is a C, but it's sharp", "This is a D"]

hz = [440, 490, 524, 293.66, 3951.07];

const getNoteNames = (hz) => {
  const noteNames = [
    'A',
    'A#',
    'B',
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#'
  ];
  const notes = {};

  noteNames.forEach((note, i) => {
    const freq = 440 * Math.pow(2, i / 12);
    notes[note] = parseFloat(freq.toFixed(2));
  });

  //   console.log(notes);

  return hz.map((frequency) => {
    const semitones = Math.round(12 * Math.log2(frequency / 440));
    const diff = ((semitones % 12) + 12) % 12;
    return noteNames[diff];
  });
};

result = getNoteNames(hz);
console.log(result);
