// Given a list of frequencies (in Hz), write a function to determine the closest musical note for each frequency based on the A440 pitch standard. Extra credit: indicate if the note is flat or sharp!
// Example:
// > getNoteNames([440, 490, 524, 293.66])
// > ["This is a A", "This is a B, but it's flat", "This is a C, but it's sharp", "This is a D"]

hz = [466.16, 440, 490, 524, 293.66, 3951.07, 739.99];
// key = "F Major"
// key = 'Eb Major';
// key = "G Major"
key = "B Major"

const getNoteNames = (hz, key) => {
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
  const flatScales = {
    'F Major': ['F', 'G', 'A', 'Bb', 'C', 'D', 'E'],
    'Bb Major': ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A'],
    'Eb Major': ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D'],
    'Ab Major': ['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G'],
    'Db Major': ['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C'],
    'Gb Major': ['Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb', 'F'],
    'Cb Major': ['Cb', 'Db', 'Eb', 'Fb', 'Gb', 'Ab', 'Bb']
  };
  const sharpScales = {
    'G Major': ['G', 'A', 'B', 'C', 'D', 'E', 'F#'],
    'D Major': ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'],
    'A Major': ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'],
    'E Major': ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'],
    'B Major': ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'],
    'F# Major': ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E#'],
    'C# Major': ['C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B#']
  };
  const notes = {};

  noteNames.forEach((note, i) => {
    const freq = 440 * Math.pow(2, i / 12);
    notes[note] = parseFloat(freq.toFixed(2));
  });

  console.log('notes', notes);

  return hz.map((frequency) => {
    const semitones = Math.round(12 * Math.log2(frequency / 440));
    const noteIndex = ((semitones % 12) + 12) % 12;

    // console.log('semitone', semitones);
    // console.log('noteIndex', noteIndex);

    // Check to see if the key is sharp or flat
    let noteType;
    if (Object.keys(flatScales).includes(key)) {
      noteType = 'flat';
    } else if (Object.keys(sharpScales).includes(key)) {
      noteType = 'sharp';
    } else {
      noteType = 'natural';
    }

    let note = noteNames[noteIndex];
// Choose sharp or flat based on the key type
    if (note.includes('/')) {
      const split = note.split('/');
      if (noteType === 'sharp') {
        note = split[0];
      } else if (noteType === 'flat') {
        note = split[1];
      } else {
        note = split[0];
      }
    }
//  Return the correct accidental designation or default to natural 
    const noteAccidental = noteNames[noteIndex].includes('/')
      ? noteType
      : 'natural';

    return `This note is: ${note} (${noteAccidental})`;
  });
};

result = getNoteNames(hz, key);
console.log(result);
