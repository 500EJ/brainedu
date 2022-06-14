class Question {
  constructor(question, index, answers) {
    this.question = question;
    this.answers = answers;
    this.answer = this.answers[index];
  }
}

export default [
  new Question("What is the purpose of myelin coating neurons?", 0, [
    "To increase the speed of the transmission of signals between neurons.",
    "To speed up the heart rate in case of an emergency.",
    "To slow down the speed of neurons so the human doesn’t get an electric shock.",
    "To increase friction when signals are sent between neurons."
  ]),
  new Question("What action do neurons perform?", 0, [
    "They pass along information throughout the body and brain.",
    "They regulate breathing, heart rate, and digestion.",
    "They allow you to move your muscles by reducing friction.",
    "They process information and turn it into something intelligible."
  ]),
  new Question("What are the three main parts of the brain?", 3, [
    "Spine, Occipital Lobe, and Temporal Lobe",
    "Arms, Feet, and Neurons",
    "Frontal Lobe, Back Cortex, and Spinal Cord",
    "Cerebrum, Cerebellum, and Brainstem"
  ]),
  new Question("What do white and gray matter do?", 2, [
    "White matter manages the right hemisphere of the brain; Gray matter manages the left hemisphere.",
    "White matter processes information; Gray matter transports it throughout the brain.",
    "White matter manages and transports information through the brain; Gray matter processes it.",
    "White matter manages the left hemisphere of the brain; Gray matter manages the right hemisphere."
  ]),
  new Question("Where are white and gray matter located?", 0, [
    "White matter is located on the inside of the brain; Gray matter is located on the outside",
    "White matter is located in the right hemisphere of the brain; Gray matter is located in the left hemisphere",
    "White matter is located in the left hemisphere of the brain; Gray matter is located in the right hemisphere",
    "White matter is located on the outside of the brain; Gray matter is located on the inside"
  ]),
  new Question("What does the frontal lobe process?", 3, [
    "Auditory Information and Memory",
    "Visual Information",
    "Touch Information",
    "Language and Reasoning"
  ]),
  new Question("What are somas?", 2, [
    "They make up the cerebrum",
    "Long part of neurons that transport information",
    "Cell bodies of neurons",
    "They make up the cerebellum"
  ]),
  new Question("What is the white matter in the brain made of?", 1, [
    "The Brainstem",
    "Neuron axons",
    "Visual information",
    "Somas"
  ]),
  new Question(
    "Which part of the brain regulates heart rate and breathing?",
    1,
    ["The Occipital Lobe", "The Brainstem", "Neurons", "The Cerebrum"]
  ),
  new Question("How does the brain communicate with the body?", 2, [
    "When we move, strings of characters are sent to the brain.",
    "The brain communicates via detecting patterns in the heart rate.",
    "Neurons pass along information between the body and brain.",
    "Our DNA informs the brain what we should do at any given moment."
  ])
];
