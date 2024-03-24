"use client";

import gsap from "gsap";

export const animatePageIn = () => {
  const transItems = gsap.utils.toArray(".transition-item");

  if (transItems) {
    const tl = gsap.timeline();
    tl.set(transItems, {
      opacity: 1,
    });
    tl.to(transItems, {
      opacity: 0,
      stagger: 0.02,
    }).to(".transition-wrapper", {
      display: "none",
    });
  }
};

export const animatePageInV2 = () => {
  const transItems = gsap.utils.toArray(".transition-item");

  if (transItems) {
    const tl = gsap.timeline();
    tl.set(transItems, {
      opacity: 1,
    });
    tl.to(transItems, {
      opacity: 0,
      stagger: {
        amount: 1,
        from: "random",
      },
    }).to(
      ".transition-wrapper",
      {
        display: "none",
      },
      "-=0.1"
    );
  }
};

export const animatePageOut = ({ href, router }) => {
  const transItems = gsap.utils.toArray(".transition-item");

  if (transItems) {
    const tl = gsap.timeline();
    tl.set(transItems, {
      opacity: 0,
    });
    tl.set(".transition-wrapper", {
      display: "grid",
    });
    tl.to(transItems, {
      opacity: 1,
      stagger: 0.02,
      onComplete: () => {
        router?.push(href);
      },
    });
  }
};

export const animatePageOutV2 = ({ href, router }) => {
  const transItems = gsap.utils.toArray(".transition-item");

  if (transItems) {
    const tl = gsap.timeline();
    tl.set(transItems, {
      opacity: 0,
    });
    tl.set(".transition-wrapper", {
      display: "grid",
    });
    tl.to(transItems, {
      opacity: 1,
      stagger: {
        amount: 1,
        from: "random",
      },
      onComplete: () => {
        router?.push(href);
      },
    });
  }
};
