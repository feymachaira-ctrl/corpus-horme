const stageContent = {
  environment: {
    kicker: "STAGE 1 · EXCITATION",
    title: "The environment enters the system.",
    copy: "Solar energy and ambient temperature establish the conditions for bodily regulation and movement. The environment is an active participant, not a backdrop."
  },
  body: {
    kicker: "STAGE 2 · EXCHANGE",
    title: "The body is a permeable boundary.",
    copy: "Sensory input and thermal exchange couple the monarch to its surroundings. The body continuously receives, filters, and changes environmental signals."
  },
  physiology: {
    kicker: "STAGE 3 · REGULATION",
    title: "Invisible processes become dynamic state.",
    copy: "Hormonal rhythms, neural activity, and muscular response regulate orientation and action. Physiology is modelled as a changing relation, never a fixed label."
  },
  computation: {
    kicker: "STAGE 4 · SYNTHESIS",
    title: "Relations become artificial-life agents.",
    copy: "Signals, memory, rules, and feedback are woven into a multi-agent ecosystem. Synthetic affect emerges through interaction across biological and artificial models."
  },
  installation: {
    kicker: "STAGE 5 · MATERIALIZATION",
    title: "Computation acquires light, sound, and motion.",
    copy: "Computed states activate Corpus Hormē and expand into a polytope: a transparent architecture where synthetic emotion is encountered as a spatial and collective event."
  }
};

const stageButtons = [...document.querySelectorAll(".stage")];
const detailKicker = document.querySelector("#detail-kicker");
const detailTitle = document.querySelector("#detail-title");
const detailCopy = document.querySelector("#detail-copy");
const motionToggle = document.querySelector("#motion-toggle");

stageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const content = stageContent[button.dataset.stage];
    stageButtons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle("is-active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    detailKicker.textContent = content.kicker;
    detailTitle.textContent = content.title;
    detailCopy.textContent = content.copy;
  });
});

motionToggle.addEventListener("click", () => {
  const paused = document.body.classList.toggle("motion-paused");
  motionToggle.textContent = paused ? "Resume motion" : "Pause motion";
  motionToggle.setAttribute("aria-pressed", String(paused));
});
