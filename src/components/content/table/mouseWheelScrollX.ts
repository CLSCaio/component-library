const eventWheel = (id: string) => {
  const elem = document.getElementById(id);

  elem?.addEventListener('wheel', (event: WheelEvent) => {
    event.preventDefault();

    const y = event.deltaY;
    let scrollWheel;

    if (y > 0) {
      scrollWheel = 200;
    } else {
      scrollWheel = -200;
    }

    elem.scrollBy({
      left: scrollWheel,
      behavior: 'smooth',
    });
  });
};

export default eventWheel;
