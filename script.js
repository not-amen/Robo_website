const facts = [
  "The Sun makes up more than 99% of the mass in the Solar System.",
  "Jupiter is so big that more than 1,300 Earths could fit inside it.",
  "A day on Venus is longer than a year on Venus.",
  "Mars has the largest volcano in the Solar System: Olympus Mons.",
  "Saturn's rings are made of ice and tiny rock pieces.",
  "Neptune has the fastest winds in the Solar System.",
  "Earth is the only planet known to have life."
];

const planetFacts = {
  Mercury: "Mercury is the smallest planet and closest to the Sun.",
  Venus: "Venus is the hottest planet with thick clouds of gas.",
  Earth: "Earth is our home and has liquid water and life.",
  Mars: "Mars is the red planet and has the tallest volcano.",
  Jupiter: "Jupiter is the largest planet with a giant storm called the Great Red Spot.",
  Saturn: "Saturn is famous for its bright rings made of ice and rock.",
  Uranus: "Uranus rotates on its side and is a blue-green color.",
  Neptune: "Neptune is far away, cold, and has supersonic winds."
};

document.getElementById("factBtn").addEventListener("click", () => {
  const fact = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById("fact").textContent = fact;
});

document.getElementById("planetSelect").addEventListener("change", (e) => {
  const planet = e.target.value;
  const fact = planetFacts[planet] || '';
  document.getElementById("planetFact").textContent = fact;
});
