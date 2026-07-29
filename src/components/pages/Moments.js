import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import PageHeader from "../common/PageHeader";
import GoToTopButton from "../common/GoToTopButton";
import { momentsTimeline } from "../../data/momentsData";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Moments = () => {
  const [selectedPhotoId, setSelectedPhotoId] = useState(null);
  const closeButtonRef = useRef(null);

  const allPhotos = useMemo(
    () =>
      momentsTimeline.flatMap((yearGroup) =>
        yearGroup.events.flatMap((event) =>
          event.photos.map((photo) => ({
            ...photo,
            eventTitle: event.title,
            date: event.date
          }))
        )
      ),
    []
  );

  const selectedIndex = allPhotos.findIndex(
    (photo) => photo.id === selectedPhotoId
  );
  const selectedPhoto =
    selectedIndex >= 0 ? allPhotos[selectedIndex] : null;

  const closeLightbox = useCallback(() => setSelectedPhotoId(null), []);
  const showPrevious = useCallback(() => {
    const index = (selectedIndex - 1 + allPhotos.length) % allPhotos.length;
    setSelectedPhotoId(allPhotos[index].id);
  }, [allPhotos, selectedIndex]);
  const showNext = useCallback(() => {
    const index = (selectedIndex + 1) % allPhotos.length;
    setSelectedPhotoId(allPhotos[index].id);
  }, [allPhotos, selectedIndex]);

  useEffect(() => {
    if (!selectedPhoto) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeLightbox, selectedPhoto, showNext, showPrevious]);

  return (
    <div className="min-h-screen bg-gray-50 px-5 py-12 md:px-10">
      <PageHeader
        title="Moments"
        subtitle="A visual archive of lab life, scientific meetings, and shared milestones."
      />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[9rem_minmax(0,1fr)]">
        <nav
          aria-label="Photo archive years"
          className="hidden lg:block"
        >
          <div className="sticky top-28 border-l border-gray-300 pl-5">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
              Archive
            </p>
            <ul className="space-y-3">
              {momentsTimeline.map(({ year }, index) => (
                <li key={year}>
                  <a
                    href={`#moments-${year}`}
                    className={`block text-lg font-semibold transition hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ${
                      index === 0 ? "text-cyan-600" : "text-gray-500"
                    }`}
                  >
                    {year}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="relative">
          <div className="absolute bottom-0 left-3 top-0 w-px bg-gray-300 md:left-1/2" />

          <div className="space-y-24">
            {momentsTimeline.map((yearGroup) => (
              <section
                key={yearGroup.year}
                id={`moments-${yearGroup.year}`}
                className="scroll-mt-28"
                aria-labelledby={`moments-year-${yearGroup.year}`}
              >
                <div className="relative mb-14 flex md:justify-center">
                  <h2
                    id={`moments-year-${yearGroup.year}`}
                    className="relative z-10 ml-3 rounded-full border-2 border-gray-200 bg-white px-6 py-2 text-xl font-bold text-gray-900 shadow-sm md:ml-0"
                  >
                    {yearGroup.year}
                  </h2>
                </div>

                <div className="space-y-20">
                  {yearGroup.events.map((event, eventIndex) => {
                    const isLeft = eventIndex % 2 === 0;

                    return (
                      <motion.article
                        key={event.id}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={reveal}
                        className="relative pl-12 md:grid md:grid-cols-2 md:gap-16 md:pl-0"
                      >
                        <span className="absolute left-[7px] top-2 z-10 h-3 w-3 rounded-full border-2 border-white bg-cyan-500 shadow md:left-1/2 md:-translate-x-1/2" />

                        <div
                          className={`mb-6 md:mb-0 ${
                            isLeft
                              ? "md:pr-8 md:text-right"
                              : "md:order-2 md:pl-8"
                          }`}
                        >
                          <time className="text-sm font-semibold uppercase tracking-wider text-cyan-600">
                            {event.date}
                          </time>
                          <h3 className="mt-2 text-2xl font-bold text-gray-900">
                            {event.title}
                          </h3>
                          {event.description && (
                            <p className="mt-3 leading-relaxed text-gray-600">
                              {event.description}
                            </p>
                          )}
                        </div>

                        <div className={isLeft ? "md:pl-8" : "md:order-1 md:pr-8"}>
                          <div
                            className={`grid gap-3 ${
                              event.photos.length > 1
                                ? "grid-cols-2"
                                : "grid-cols-1"
                            }`}
                          >
                            {event.photos.map((photo, photoIndex) => (
                              <button
                                key={photo.id}
                                type="button"
                                onClick={() => setSelectedPhotoId(photo.id)}
                                className={`group overflow-hidden rounded-lg bg-gray-200 text-left shadow-md transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-4 ${
                                  event.photos.length > 2 && photoIndex === 0
                                    ? "col-span-2"
                                    : ""
                                }`}
                                aria-label={`Open ${photo.alt}`}
                              >
                                <img
                                  src={photo.src}
                                  alt={photo.alt}
                                  loading="lazy"
                                  className="aspect-[3/2] h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                                />
                              </button>
                            ))}
                          </div>
                        </div>
                      </motion.article>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedPhoto.eventTitle} photo viewer`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/95 p-4 md:p-10"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) closeLightbox();
            }}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeLightbox}
              className="absolute right-5 top-5 rounded-full p-3 text-white transition hover:bg-white/10 hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label="Close photo viewer"
            >
              <FaTimes size={24} />
            </button>

            {allPhotos.length > 1 && (
              <button
                type="button"
                onClick={showPrevious}
                className="absolute left-3 rounded-full p-3 text-white/70 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 md:left-8"
                aria-label="Previous photo"
              >
                <FaChevronLeft size={28} />
              </button>
            )}

            <figure className="max-w-5xl">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="max-h-[78vh] max-w-full rounded-lg object-contain shadow-2xl"
              />
              <figcaption className="mt-4 text-center text-white">
                <p className="font-semibold">{selectedPhoto.eventTitle}</p>
                <p className="mt-1 text-sm text-gray-400">
                  {selectedPhoto.date} · Image {selectedIndex + 1} of{" "}
                  {allPhotos.length}
                </p>
              </figcaption>
            </figure>

            {allPhotos.length > 1 && (
              <button
                type="button"
                onClick={showNext}
                className="absolute right-3 rounded-full p-3 text-white/70 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 md:right-8"
                aria-label="Next photo"
              >
                <FaChevronRight size={28} />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <GoToTopButton />
    </div>
  );
};

export default Moments;
