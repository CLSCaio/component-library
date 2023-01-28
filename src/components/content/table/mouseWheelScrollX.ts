const eventWheel = (id: string) => {
  const elem = document.getElementById(id);

  elem?.addEventListener('wheel', (event: WheelEvent) => {
    event.preventDefault();

    const [y, x] = [event.deltaX, event.deltaY];
    let magnitude;

    if (x === 0) {
      magnitude = y > 0 ? -1 : 1;
    } else {
      magnitude = x;
    }

    elem.scrollBy({
      left: magnitude,
    });
  });
};

export default eventWheel;
