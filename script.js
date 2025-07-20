const family = [
  { name: "Dad", phone: "254729519409" },
  { name: "Mom", phone: "254724485150" },
  { name: "Faith", phone: "254705" },
  { name: "Grace", phone: "2547XXXXXXXX" },
  { name: "Joy", phone: "254110356000" },
  { name: "Abednego", phone: "254708009498" },
  { name: "Eric", phone: "254711374759" }
];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const alreadySelected = localStorage.getItem("selectedPerson");
const container = document.getElementById("boxContainer");

if (alreadySelected) {
  container.innerHTML = `<p style="color: #c62828; font-weight: bold;">
    You've already selected your gift box 🎁!
  </p>`;
} else {
  const shuffledFamily = shuffle([...family]);

  shuffledFamily.forEach((person, index) => {
    const btn = document.createElement("button");
    btn.className = "box";
    btn.textContent = "🎁";
    btn.onclick = () => revealPerson(person);
    container.appendChild(btn);
  });
}

function revealPerson(person) {
  alert(`You selected: ${person.name}`);
  localStorage.setItem("selectedPerson", person.name);

  const text = encodeURIComponent("I selected you for the gifting.");
  const url = `https://wa.me/${person.phone}?text=${text}`;
  window.location.href = url;
}
