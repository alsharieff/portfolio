function ProjectCard({ image, title, description, link, ongoing = false }) {
  return (
    <div
      className="
        basis-[calc((100%-0.75rem)/2)]
        sm:basis-[calc((100%-1.5rem)/3)]
        bg-[#2b2c2f]
        rounded-lg
        shadow
        flex-shrink-0
        flex flex-col
        min-h-[320px] sm:min-h-[360px]
      "
    >
      <img
        src={image}
        alt={title}
        className="w-full h-32 sm:h-40 object-cover rounded-t-lg"
      />

      <div className="p-3 sm:p-4 flex flex-col flex-1">
        <h3 className="text-sm sm:text-base font-semibold mb-1">{title}</h3>

        <p className="text-xs sm:text-sm text-gray-300 mb-3 line-clamp-3">
          {description}
        </p>

        <a
          href={typeof link === "string" ? link : "#"}
          onClick={(e) => {
            if (ongoing) {
              e.preventDefault();
              alert("This project is ongoing and not yet published!");
            }
          }}
          className="
            inline-block
            text-xs sm:text-sm
            px-3 py-1.5
            bg-white text-black
            rounded-md
            mt-auto
            hover:bg-gray-200 transition-colors
            disabled:opacity-60
          "
          aria-disabled={ongoing}
          role={ongoing ? "button" : undefined}
        >
          {ongoing ? "Coming Soon" : "View"}
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
