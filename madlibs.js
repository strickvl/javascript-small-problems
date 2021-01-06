function madlibs(template) {
  const ADJECTIVES = ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'];
  const NOUNS = ['fox', 'dog', 'head', 'leg', 'tail', 'cat'];
  const VERBS = ['jumps', 'lifts', 'bites', 'licks', 'pats'];
  const ADVERBS = ['easily', 'lazily', 'noisily', 'excitedly'];

  let adjective = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
  let noun = NOUNS[Math.floor(Math.random() * NOUNS.length)];
  let verb = VERBS[Math.floor(Math.random() * VERBS.length)];
  let adverb = ADVERBS[Math.floor(Math.random() * ADVERBS.length)];

  let story = template;
  story = story.replace(/ADJECTIVE/g, adjective);
  story = story.replace(/NOUN/g, noun);
  story = story.replace(/ADVERB/g, adverb);
  story = story.replace(/VERB/g, verb);
  return story;
}

const TEMPLATE1 = "The ADJECTIVE brown NOUN VERB the ADJECTIVE yellow NOUN, who ADVERB VERB his NOUN and looks around.";
const TEMPLATE2 = "The NOUN VERB the NOUN's NOUN.";

console.log(madlibs(TEMPLATE1));
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

console.log(madlibs(TEMPLATE1));
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

console.log(madlibs(TEMPLATE2));      // The "fox" "bites" the "dog"'s "tail".
console.log(madlibs(TEMPLATE2));      // The "cat" "pats" the "cat"'s "head".
