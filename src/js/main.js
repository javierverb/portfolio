import "../css/main.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

class PortfolioPage {
  static start() {
    PortfolioPage.initNav();
    PortfolioPage.initMobileMenu();
    PortfolioPage.initScrollTop();
  }

  static initNav() {
    const links = document.querySelectorAll("[data-nav]");
    const sections = ["home", "portfolio", "about", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const mark = (id) => {
      links.forEach((link) => {
        if (link.getAttribute("data-nav") === id) {
          link.setAttribute("aria-current", "page");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    };

    links.forEach((link) => {
      link.addEventListener("click", () => mark(link.getAttribute("data-nav")));
    });

    if (!("IntersectionObserver" in window)) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          mark(visible.target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0.1, 0.4] },
    );
    sections.forEach((section) => observer.observe(section));
  }

  static initMobileMenu() {
    const button = document.getElementById("mobile-menu-button");
    const drawer = document.getElementById("mobile-menu-drawer");
    const backdrop = document.getElementById("mobile-menu-backdrop");
    const panel = document.getElementById("mobile-menu-panel");
    if (!button || !drawer || !backdrop || !panel) {
      return;
    }

    const isOpen = () => drawer.classList.contains("mobile-menu-drawer--open");

    const setOpen = (open) => {
      drawer.classList.toggle("mobile-menu-drawer--open", open);
      drawer.setAttribute("aria-hidden", open ? "false" : "true");
      backdrop.classList.toggle("opacity-0", !open);
      backdrop.classList.toggle("opacity-100", open);
      backdrop.classList.toggle("pointer-events-none", !open);
      panel.classList.toggle("translate-x-full", !open);
      panel.classList.toggle("translate-x-0", open);
      drawer.classList.toggle("pointer-events-none", !open);
      drawer.classList.toggle("pointer-events-auto", open);
      button.setAttribute("aria-expanded", String(open));
      button.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      button.classList.toggle("hidden", open);
      document.body.classList.toggle("overflow-hidden", open);
    };

    button.addEventListener("click", (event) => {
      event.stopPropagation();
      setOpen(!isOpen());
    });
    backdrop.addEventListener("click", () => setOpen(false));
    panel.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setOpen(false));
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && isOpen()) {
        setOpen(false);
      }
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024 && isOpen()) {
        setOpen(false);
      }
    });
  }

  static initScrollTop() {
    const button = document.getElementById("return-to-top");
    if (!button) {
      return;
    }
    const sync = () => {
      const show = window.scrollY > 300;
      button.classList.toggle("hidden", !show);
      button.classList.toggle("flex", show);
    };
    window.addEventListener("scroll", sync, { passive: true });
    button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    sync();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  PortfolioPage.start();
});
