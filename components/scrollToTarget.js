export const scrollToTarget = (href) => {
  if (href.startsWith("/#")) {
    const sectionId = href.slice(2);
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 60;
      const offset =
        section.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  } else {
    window.location.href = href;
  }
};
