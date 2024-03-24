"use client";

import gsap from "gsap";

export const animatePageIn = () => {
  const banners = gsap.utils.toArray(".banner");

  if (banners) {
    const tl = gsap.timeline();
    tl.set(banners, {
      yPercent: 0,
    }).to(banners, {
      yPercent: 100,
      stagger: 0.25,
    });
  }
};

export const animatePageOut = ({ href, router }) => {
  const banners = gsap.utils.toArray(".banner");

  if (banners) {
    const tl = gsap.timeline();
    tl.set(banners, {
      yPercent: -100,
    }).to(banners, {
      yPercent: 0,
      stagger: 0.25,
      onComplete: () => {
        router?.push(href);
      },
    });
  }
};
