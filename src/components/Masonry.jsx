import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";

export const useMedia = (queries, values, defaultValue) => {
  const get = () =>
    values[queries.findIndex((q) => matchMedia(q).matches)] ?? defaultValue;

  const [value, setValue] = useState(get);

  useEffect(() => {
    const handler = () => setValue(get);
    queries.forEach((q) => matchMedia(q).addEventListener("change", handler));
    return () =>
      queries.forEach((q) =>
        matchMedia(q).removeEventListener("change", handler)
      );
  }, [queries]);

  return value;
};

export const useMeasure = () => {
  const ref = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [ref, size];
};

const preloadImages = async (urls) => {
  await Promise.all(
    urls.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = img.onerror = () => resolve();
        })
    )
  );
};

const Masonry = ({
  Masonryitems,
  ease = "power3.out",
  duration = 0.6,
  stagger = 0.05,
  animateFrom = "bottom",
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = false,
}) => {
  const columns = useMedia(
    [
      "(min-width:1500px)",
      "(min-width:1000px)",
      "(min-width:600px)",
      "(min-width:400px)",
    ],
    [5, 4, 3, 2],
    1
  );

  const [containerRef, { width }] = useMeasure();
  const [imagesReady, setImagesReady] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const selectedImage =
    selectedIndex !== null ? Masonryitems[selectedIndex] : null;

  const getInitialPosition = (Masonryitems) => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return { x: Masonryitems.x, y: Masonryitems.y };

    let direction = animateFrom;
    if (animateFrom === "random") {
      const dirs = ["top", "bottom", "left", "right"];
      direction = dirs[Math.floor(Math.random() * dirs.length)];
    }

    switch (direction) {
      case "top":
        return { x: Masonryitems.x, y: -200 };
      case "bottom":
        return { x: Masonryitems.x, y: window.innerHeight + 200 };
      case "left":
        return { x: -200, y: Masonryitems.y };
      case "right":
        return { x: window.innerWidth + 200, y: Masonryitems.y };
      case "center":
        return {
          x: containerRect.width / 2 - Masonryitems.w / 2,
          y: containerRect.height / 2 - Masonryitems.h / 2,
        };
      default:
        return { x: Masonryitems.x, y: Masonryitems.y + 100 };
    }
  };

  useEffect(() => {
    preloadImages(Masonryitems.map((i) => i.img)).then(() =>
      setImagesReady(true)
    );
  }, [Masonryitems]);

  const grid = useMemo(() => {
    if (!width) return { items: [], maxHeight: 0 };

    const colHeights = new Array(columns).fill(0);
    const gap = 16;
    const totalGaps = (columns - 1) * gap;
    const columnWidth = (width - totalGaps) / columns;

    const items = Masonryitems.map((child) => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = col * (columnWidth + gap);
      const height =
        columns === 1
          ? child.height / 2.5 // 📱 mobile view: larger image height
          : child.height / 1.5; // 🖥️ desktop/tablet view: smaller height

      const y = colHeights[col];

      colHeights[col] += height + gap;
      return { ...child, x, y, w: columnWidth, h: height };
    });

    const maxHeight = Math.max(...colHeights);
    return { items, maxHeight };
  }, [columns, Masonryitems, width]);

  const hasMounted = useRef(false);

  useLayoutEffect(() => {
    if (!imagesReady) return;

    grid.items.forEach((Masonryitems, index) => {
      const selector = `[data-key="${Masonryitems.id}"]`;
      const animProps = {
        x: Masonryitems.x,
        y: Masonryitems.y,
        width: Masonryitems.w,
        height: Masonryitems.h,
      };

      if (!hasMounted.current) {
        const start = getInitialPosition(Masonryitems);
        gsap.fromTo(
          selector,
          {
            opacity: 0,
            x: start.x,
            y: start.y,
            width: Masonryitems.w,
            height: Masonryitems.h,
            ...(blurToFocus && { filter: "blur(10px)" }),
          },
          {
            opacity: 1,
            ...animProps,
            ...(blurToFocus && { filter: "blur(0px)" }),
            duration: 0.8,
            ease: "power3.out",
            delay: index * stagger,
          }
        );
      } else {
        gsap.to(selector, {
          ...animProps,
          duration,
          ease,
          overwrite: "auto",
        });
      }
    });

    hasMounted.current = true;
  }, [grid, imagesReady, stagger, animateFrom, blurToFocus, duration, ease]);

  const handleMouseEnter = (id, element) => {
    if (scaleOnHover) {
      gsap.to(`[data-key="${id}"]`, {
        scale: hoverScale,
        duration: 0.3,
        ease: "power2.out",
      });
    }
    if (colorShiftOnHover) {
      const overlay = element.querySelector(".color-overlay");
      if (overlay) gsap.to(overlay, { opacity: 0.3, duration: 0.3 });
    }
  };

  const handleMouseLeave = (id, element) => {
    if (scaleOnHover) {
      gsap.to(`[data-key="${id}"]`, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
    if (colorShiftOnHover) {
      const overlay = element.querySelector(".color-overlay");
      if (overlay) gsap.to(overlay, { opacity: 0, duration: 0.3 });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full p-5 pb-11 mb-11 overflow-hidden bg-black"
      style={{
        height: grid.maxHeight,
        maxWidth: "100%",
        margin: "0 auto",
      }}
    >
      <h1 className="my-5">My Gallery</h1>
      {grid.items.map((Masonryitems, index) => (
        <div
          key={Masonryitems.id}
          data-key={Masonryitems.id}
          className="absolute box-content"
          style={{ willChange: "transform, width, height, opacity" }}
          onClick={() => setSelectedIndex(index)}
          onMouseEnter={(e) =>
            handleMouseEnter(Masonryitems.id, e.currentTarget)
          }
          onMouseLeave={(e) =>
            handleMouseLeave(Masonryitems.id, e.currentTarget)
          }
        >
          <div
            className="relative w-full h-full bg-cover bg-center rounded-[10px] shadow-[0px_10px_50px_-10px_rgba(0,0,0,0.2)] uppercase text-[10px] leading-[10px]"
            style={{ backgroundImage: `url(${Masonryitems.img})` }}
          >
            {colorShiftOnHover && (
              <div className="color-overlay absolute inset-0 rounded-[10px] bg-gradient-to-tr from-pink-500/50 to-sky-500/50 opacity-0 pointer-events-none" />
            )}
          </div>
        </div>
      ))}

      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center fade-in">
          <div className="relative max-w-3xl w-full mx-auto p-4 zoom-in">
            <img
              src={selectedImage.img}
              alt="Preview"
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl bg-black/50 p-2 rounded-full hover:bg-black transition"
              onClick={() => setSelectedIndex(null)}
            >
              &times;
            </button>

            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black/40 p-2 rounded-full hover:bg-black"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) =>
                  prev === 0 ? Masonryitems.length - 1 : prev - 1
                );
              }}
            >
              &#8592;
            </button>

            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black/40 p-2 rounded-full hover:bg-black"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) =>
                  prev === Masonryitems.length - 1 ? 0 : prev + 1
                );
              }}
            >
              &#8594;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Masonry;
