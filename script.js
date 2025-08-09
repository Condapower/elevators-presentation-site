const waitlistBtn = document.getElementById("waitlist-btn");
const confirmationMsg = document.getElementById("waitlist-confirmation");

waitlistBtn.addEventListener("click", () => {
  confirmationMsg.textContent = "You're on the list! 🚀";
  confirmationMsg.style.display = "block";
});


// Toggle solutions
document.querySelectorAll(".show-solution").forEach((btn) => {
  btn.addEventListener("click", () => {
    const box = btn.nextElementSibling;
    const isOpen = box.style.display === "block";
    box.style.display = isOpen ? "none" : "block";
    btn.textContent = isOpen ? "Show Solution" : "Hide Solution";
  });
});


const cases = {
  driveFault: {
    title: "Car doesn’t run – Drive Fault",
    details: `
      <ol>
        <li>Verify mainline and controller fuses are good (no jumpers).</li>
        <li>Check safety circuit: stop switch, pit stop, car top, door locks.</li>
        <li>Confirm encoder/cable seated and shield grounded.</li>
        <li>On the drive: clear faults, check input phases, DC bus OK.</li>
        <li>Run auto-tune per manual.</li>
        <li>Test slow inspection run, then normal run.</li>
      </ol>
      <p><em>Tip:</em> If the drive faults immediately, check motor leads U/V/W phasing.</p>
    `
  },
  doorLock: {
    title: "Doors won’t close – DLK not made",
    details: `
      <ol>
        <li>Verify door zone sensor and vane alignment.</li>
        <li>Check interlock circuit continuity from car top to controller.</li>
        <li>Inspect operator close limits and nudging input.</li>
        <li>Reduce close speed for test; check rollers/obstructions.</li>
        <li>Simulate DLK with meter only (no jumper for run).</li>
      </ol>
      <p><em>Tip:</em> If DLK flickers, suspect cable damage at hinge/loop.</p>
    `
  }
};

document.getElementById("caseSelect").addEventListener("change", function() {
  const val = this.value;
  const box = document.getElementById("solutionBox");
  const title = document.getElementById("caseTitle");
  const details = document.getElementById("caseDetails");

  if (val && cases[val]) {
    title.textContent = cases[val].title;
    details.innerHTML = cases[val].details;
    box.style.display = "block";
  } else {
    box.style.display = "none";
  }
});
