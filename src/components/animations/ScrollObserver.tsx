"use client";

import { useEffect } from "react";

/**
 * Single global IntersectionObserver mounted at the root layout.
 *
 * Adds `.is-visible` to every element carrying the `.reveal` or
 * `.image-reveal` utility class when it enters the viewport, and stops
 * watching it. This drives the scroll-triggered fade-up on cards and
 * the clip-path sweep on hero/featured images via CSS only — the
 * component itself adds nothing to the rendered DOM.
 *
 * Mutation-observed so that dynamically added `.reveal` elements
 * (modals, client-rendered subtrees) get picked up too.
 *
 * Respects `prefers-reduced-motion`: in that mode, all `.reveal`
 * elements are immediately marked visible so the page renders in its
 * final state with no transition.
 */
export function ScrollObserver() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const SELECTORS = ".reveal:not(.is-visible), .image-reveal:not(.is-visible)";

    if (reduceMotion) {
      document
        .querySelectorAll<HTMLElement>(".reveal, .image-reveal")
        .forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.05 },
    );

    document
      .querySelectorAll<HTMLElement>(SELECTORS)
      .forEach((el) => obs.observe(el));

    // Pick up `.reveal` elements added after first paint (modals,
    // hydrated subtrees, route transitions).
    const mut = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (
            (node.classList?.contains("reveal") ||
              node.classList?.contains("image-reveal")) &&
            !node.classList.contains("is-visible")
          ) {
            obs.observe(node);
          }
          node.querySelectorAll?.<HTMLElement>(SELECTORS).forEach((child) => {
            obs.observe(child);
          });
        });
      }
    });
    mut.observe(document.body, { childList: true, subtree: true });

    return () => {
      obs.disconnect();
      mut.disconnect();
    };
  }, []);

  return null;
}
