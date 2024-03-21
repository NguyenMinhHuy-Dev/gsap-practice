"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Observer } from "gsap/all";
import { useRef } from "react";
import SplitType from "split-type";

import "./style.css";

const Page = () => {
  const ref = useRef();

  useGSAP(
    () => {
      gsap.registerPlugin(Observer);

      let sections = document.querySelectorAll(".section");
      let images = document.querySelectorAll(".bg");
      let headings = gsap.utils.toArray(".section-heading");
      let outerWrappers = gsap.utils.toArray(".outer");
      let innerWrappers = gsap.utils.toArray(".inner");
      let splitHeadings = headings.map(
        (heading) =>
          new SplitType(heading, {
            type: "chars,words,lines",
          })
      );
      let currentIndex = -1;
      let wrap = gsap.utils.wrap(0, sections.length);
      let animating;

      gsap.set(outerWrappers, { yPercent: 1000 });
      gsap.set(innerWrappers, { yPercent: -100 });

      const gotoSection = (index, direction) => {
        index = wrap(index);
        animating = true;
        let fromTop = direction === -1;
        let dFactor = fromTop ? -1 : 1;
        let tl = gsap.timeline({
          defaults: {
            duration: 1.25,
            ease: "power1.inOut",
          },
          onComplete: () => (animating = false),
        });

        if (currentIndex >= 0) {
          gsap.set(sections[currentIndex], {
            zIndex: 0,
          });
          tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(
            sections[currentIndex],
            { autoAlpha: 0 }
          );
        }
        gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
        tl.fromTo(
          [outerWrappers[index], innerWrappers[index]],
          {
            yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor),
          },
          {
            yPercent: 0,
          },
          0
        )
          .fromTo(
            images[index],
            {
              yPercent: 15 * dFactor,
            },
            {
              yPercent: 0,
            },
            0
          )
          .fromTo(
            splitHeadings[index].chars,
            {
              autoAlpha: 0,
              yPercent: 150 * dFactor,
            },
            {
              autoAlpha: 1,
              yPercent: 0,
              duration: 1,
              ease: "power2",
              stagger: {
                each: 0.02,
                from: "random",
              },
            },
            0.2
          );
        currentIndex = index;
      };

      Observer.create({
        type: "wheel,touch,pointer",
        wheelSpeed: -1,
        onDown: () => !animating && gotoSection(currentIndex - 1, -1),
        onUp: () => !animating && gotoSection(currentIndex + 1, 1),
        tolerance: 10,
        preventDefault: true,
      });

      gotoSection(0, 1);
    },
    { scope: ref }
  );
  return (
    <main ref={ref} className="w-screen h-screen relative">
      <header className="fixed top-0 left-0 w-full h-10 flex items-center justify-between z-[3] text-2xl text-white mix-blend-difference p-5">
        <span>GSAP Observer</span>
        <span>Edgar</span>
      </header>

      <section className="section w-full h-full fixed top-0">
        <div className="outer w-full h-full overflow-y-hidden">
          <div className="inner w-full h-full overflow-y-hidden">
            <div
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1617478755490-e21232a5eeaf?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU1NjM5NA&ixlib=rb-1.2.1&q=75&w=1920)",
              }}
              className="bg flex items-center justify-center absolute top-0 w-full h-full bg-cover bg-center"
            >
              <h2 className="z-[2] text-9xl text-white mix-blend-difference section-heading">
                Hello
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="section w-full h-full fixed top-0">
        <div className="outer w-full h-full overflow-y-hidden">
          <div className="inner w-full h-full overflow-y-hidden">
            <div
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1617128734662-66da6c1d3505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzc3NTM3MA&ixlib=rb-1.2.1&q=75&w=1920)",
              }}
              className="bg flex items-center justify-center absolute top-0 w-full h-full bg-cover bg-center"
            >
              <h2 className="z-[2] text-9xl text-white mix-blend-difference section-heading">
                Hello
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="section w-full h-full fixed top-0">
        <div className="outer w-full h-full overflow-y-hidden">
          <div className="inner w-full h-full overflow-y-hidden">
            <div
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1617438817509-70e91ad264a5?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU2MDk4Mg&ixlib=rb-1.2.1&q=75&w=1920)",
              }}
              className="bg flex items-center justify-center absolute top-0 w-full h-full bg-cover bg-center"
            >
              <h2 className="z-[2] text-9xl text-white mix-blend-difference section-heading">
                Hello
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="section w-full h-full fixed top-0">
        <div className="outer w-full h-full overflow-y-hidden">
          <div className="inner w-full h-full overflow-y-hidden">
            <div
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1617412327653-c29093585207?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU2MDgzMQ&ixlib=rb-1.2.1&q=75&w=1920)",
              }}
              className="bg flex items-center justify-center absolute top-0 w-full h-full bg-cover bg-center"
            >
              <h2 className="z-[2] text-9xl text-white mix-blend-difference section-heading">
                Hello
              </h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
